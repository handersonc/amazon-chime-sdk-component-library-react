import React from 'react';
import { GridProps as SSGridProps } from 'styled-system';
import { BaseProps } from '../Base';
export interface GridProps extends BaseProps, SSGridProps {
    /** Whether or not the grid is responsive to different window sizes. */
    responsive?: boolean;
}
export declare const Grid: React.FC<React.PropsWithChildren<GridProps>>;
export default Grid;
