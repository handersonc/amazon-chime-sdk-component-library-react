import { AudioVideoFacade } from 'amazon-chime-sdk-js';
import React from 'react';
declare type AudioVideoValue = AudioVideoFacade | null;
export declare const AudioVideoContext: React.Context<AudioVideoValue>;
export declare const AudioVideoProvider: React.FC<React.PropsWithChildren<unknown>>;
export declare const useAudioVideo: () => AudioVideoValue;
export {};
