'use server';

import { uploadToS3Server, getPublicUrl } from '@/lib/amplify-server-upload';
import { env } from '@/env';
import { db } from '@/server/db';
import Together from 'together-ai';

const together = new Together({ apiKey: env.TOGETHER_AI_API_KEY });

export type ImageModelList =
  | 'black-forest-labs/FLUX1.1-pro'
  | 'black-forest-labs/FLUX.1-schnell'
  | 'black-forest-labs/FLUX.1-schnell-Free'
  | 'black-forest-labs/FLUX.1-pro'
  | 'black-forest-labs/FLUX.1-dev';

export async function generateImageAction(
  prompt: string,
  model: ImageModelList = 'black-forest-labs/FLUX.1-schnell-Free'
) {
  const userId = 'cmgi94l4c0000teq0hejotfen';

  if (!userId) {
    throw new Error('You must be logged in to generate images');
  }

  try {
    console.log(`Generating image with model: ${model}`);

    // Generate image via Together AI (unchanged)
    const response = (await together.images.create({
      model: model,
      prompt: prompt,
      width: 1024,
      height: 768,
      steps: model.includes('schnell') ? 4 : 28,
      n: 1,
    })) as unknown as {
      id: string;
      model: string;
      object: string;
      data: { url: string }[];
    };

    const imageUrl = response.data[0]?.url;

    if (!imageUrl) {
      throw new Error('Failed to generate image');
    }

    console.log(`Generated image URL: ${imageUrl}`);

    // Download image from Together AI
    const imageResponse = await fetch(imageUrl);
    if (!imageResponse.ok) {
      throw new Error('Failed to download image from Together AI');
    }

    const imageBlob = await imageResponse.blob();

    // Generate filename from prompt
    const filename = `${prompt.substring(0, 20).replace(/[^a-z0-9]/gi, '_')}_${Date.now()}.png`;

    // Upload to S3 via Amplify instead of UploadThing
    const uploadResult = await uploadToS3Server(
      imageBlob,
      filename,
      'document' // Store generated images under 'document/' prefix
    );

    console.log('S3 upload result:', uploadResult);

    if (!uploadResult.success || !uploadResult.path) {
      console.error('S3 upload error:', uploadResult.error);
      throw new Error('Failed to upload image to S3');
    }

    // Get public URL for the uploaded image
    const publicUrl = await getPublicUrl(uploadResult.path);
    console.log(`Uploaded to S3 URL: ${publicUrl}`);

    // Store in database with S3 public URL
    const generatedImage = await db.generatedImage.create({
      data: {
        url: publicUrl, // Public S3 URL
        prompt: prompt,
        userId: userId,
      },
    });

    return {
      success: true,
      image: generatedImage,
    };
  } catch (error) {
    console.error('Error generating image:', error);
    return {
      success: false,
      error:
        error instanceof Error ? error.message : 'Failed to generate image',
    };
  }
}