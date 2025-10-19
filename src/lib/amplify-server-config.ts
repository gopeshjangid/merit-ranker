import { Amplify } from 'aws-amplify';
import outputs from '@root/amplify_outputs.json';

// Singleton flag to ensure Amplify is configured only once per server process
let isConfigured = false;

// Configure Amplify for server-side usage (Server Actions, API Routes)
export function configureAmplifyServer() {
  if (isConfigured) {
    return; // Already configured, skip
  }

  try {
    Amplify.configure(outputs, {
      ssr: true, // Enable Server-Side Rendering mode
    });
    isConfigured = true;
    console.log('✅ Amplify configured for server-side usage');
  } catch (error) {
    console.error('❌ Failed to configure Amplify on server:', error);
    throw error;
  }
}