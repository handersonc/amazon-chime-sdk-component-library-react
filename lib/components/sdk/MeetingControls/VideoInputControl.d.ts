import React from 'react';
import { BaseSdkProps } from '../Base';
interface Props extends BaseSdkProps {
    /** The label that will be shown for video input control, it defaults to `Video`. */
    label?: string;
}
export declare const VideoInputControl: React.FC<React.PropsWithChildren<Props>>;
export default VideoInputControl;
