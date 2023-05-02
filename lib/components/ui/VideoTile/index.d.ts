import React, { HTMLAttributes } from 'react';
import { BaseProps } from '../Base';
declare type ObjectFit = 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
export interface VideoTileProps extends Omit<HTMLAttributes<HTMLDivElement>, 'css'>, BaseProps {
    /** The name to show on the video tile */
    nameplate?: string | null;
    /** Specifies which CSS object-fit value to apply to the VideoTile so that it resizes to fit its container  */
    objectFit?: ObjectFit;
}
export declare const VideoTile: React.ForwardRefExoticComponent<VideoTileProps & React.RefAttributes<HTMLVideoElement>>;
export default VideoTile;
