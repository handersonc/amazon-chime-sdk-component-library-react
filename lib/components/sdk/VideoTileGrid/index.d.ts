import React from 'react';
import { BaseProps } from '../../ui/Base';
import { Layout } from '../../ui/VideoGrid';
interface Props extends BaseProps {
    /** A component to render when there are no remote videos present */
    noRemoteVideoView?: React.ReactNode;
    /** The layout of the grid. */
    layout?: Layout;
}
export declare const VideoTileGrid: React.FC<React.PropsWithChildren<Props>>;
export default VideoTileGrid;
