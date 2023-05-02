import type { AudioInputDevice } from 'amazon-chime-sdk-js';
import React from 'react';
import { AudioInputContextType } from '../../types';
interface Props {
    onDeviceReplacement?: (nextDevice: string, currentDevice: AudioInputDevice | undefined) => Promise<AudioInputDevice>;
}
export declare const AudioInputProvider: React.FC<React.PropsWithChildren<Props>>;
export declare const useAudioInputs: () => AudioInputContextType;
export {};
