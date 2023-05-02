import React from 'react';
export declare type Layout = 'standard' | 'featured' | null;
export interface VideoGridProps extends React.HTMLAttributes<HTMLDivElement> {
    /** The number of tiles to lay out. */
    size?: number;
    /** The layout of the grid. */
    layout?: Layout;
}
interface GridContext {
    usingGrid: boolean;
}
declare const GridContext: React.Context<GridContext | null>;
export declare const VideoGrid: React.FC<React.PropsWithChildren<VideoGridProps>>;
export declare const useGridData: () => GridContext | null;
export default VideoGrid;
