import React from 'react';
import { BaseSdkProps } from '../Base';
interface Props extends BaseSdkProps {
    /** The label that will be shown for video input control, it defaults to `Video`. */
    label?: string;
    /** The label that will be shown for the background blur button. */
    backgroundBlurLabel?: string;
}
export declare const VideoInputBackgroundBlurControl: React.FC<React.PropsWithChildren<Props>>;
export default VideoInputBackgroundBlurControl;
