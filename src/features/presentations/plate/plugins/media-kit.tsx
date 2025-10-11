'use client';

import { CaptionPlugin } from '@platejs/caption/react';
import {
  AudioPlugin,
  FilePlugin,
  ImagePlugin,
  MediaEmbedPlugin,
  PlaceholderPlugin,
  VideoPlugin,
} from '@platejs/media/react';
import { KEYS } from 'platejs';

import { AudioElement } from '@/features/presentations/plate/ui/media-audio-node';
import { MediaEmbedElement } from '@/features/presentations/plate/ui/media-embed-node';
import { FileElement } from '@/features/presentations/plate/ui/media-file-node';
import { ImageElement } from '@/features/presentations/plate/ui/media-image-node';
import { PlaceholderElement } from '@/features/presentations/plate/ui/media-placeholder-node';
import { MediaPreviewDialog } from '@/features/presentations/plate/ui/media-preview-dialog';
import { MediaUploadToast } from '@/features/presentations/plate/ui/media-upload-toast';
import { VideoElement } from '@/features/presentations/plate/ui/media-video-node';

export const MediaKit = [
  ImagePlugin.configure({
    options: { disableUploadInsert: true },
    render: { afterEditable: MediaPreviewDialog, node: ImageElement },
  }),
  MediaEmbedPlugin.withComponent(MediaEmbedElement),
  VideoPlugin.withComponent(VideoElement),
  AudioPlugin.withComponent(AudioElement),
  FilePlugin.withComponent(FileElement),
  PlaceholderPlugin.configure({
    options: { disableEmptyPlaceholder: true },
    render: { afterEditable: MediaUploadToast, node: PlaceholderElement },
  }),
  CaptionPlugin.configure({
    options: {
      query: {
        allow: [KEYS.img, KEYS.video, KEYS.audio, KEYS.file, KEYS.mediaEmbed],
      },
    },
  }),
];
