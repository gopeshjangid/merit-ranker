'use client';

import * as React from 'react';

import type { TExcalidrawElement } from '@platejs/excalidraw';
import type { PlateElementProps } from 'platejs/react';

import { useExcalidrawElement } from '@platejs/excalidraw/react';
import { PlateElement, useReadOnly } from 'platejs/react';

import '@excalidraw/excalidraw/index.css';

export function ExcalidrawElement(
  props: PlateElementProps<TExcalidrawElement>
) {
  const { children, element } = props;
  const readOnly = useReadOnly();

  const { Excalidraw, excalidrawProps } = useExcalidrawElement({
    element,
  });

  React.useEffect(() => {
    const fixCollaborators = async () => {
      if (excalidrawProps?.initialData) {
        const initialData = await Promise.resolve(excalidrawProps.initialData);

        if (initialData?.appState) {
          const appState = initialData.appState as any;
          if (
            appState.collaborators &&
            typeof appState.collaborators === 'object' &&
            !Array.isArray(appState.collaborators)
          ) {
            appState.collaborators = [];
          }
        }
      }
    };

    fixCollaborators();
  }, [excalidrawProps?.initialData]);

  return (
    <PlateElement {...props}>
      <div contentEditable={false}>
        <div className="mx-auto aspect-video h-[600px] w-[min(100%,600px)] overflow-hidden rounded-sm border">
          {Excalidraw && (
            <Excalidraw
              {...(excalidrawProps as any)}
              viewModeEnabled={readOnly}
            />
          )}
        </div>
      </div>
      {children}
    </PlateElement>
  );
}
