import React from 'react';
import { BaseSdkProps } from '../Base';
interface Props extends BaseSdkProps {
    /** The label that will be shown for audio output speaker control, it defaults to `Speaker`. */
    label?: string;
}
export declare const AudioOutputControl: React.FC<React.PropsWithChildren<Props>>;
export default AudioOutputControl;
