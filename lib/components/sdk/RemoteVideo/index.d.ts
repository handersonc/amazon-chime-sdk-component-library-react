import React, { HTMLAttributes } from 'react';
import { BaseSdkProps } from '../Base';
interface Props extends Omit<HTMLAttributes<HTMLDivElement>, 'css'>, BaseSdkProps {
    /** The tile ID to bind the video element to */
    tileId: number;
    /** The name to show on the video's nameplate */
    name?: string;
}
export declare const RemoteVideo: React.FC<React.PropsWithChildren<Props>>;
export default RemoteVideo;
