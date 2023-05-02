import React from 'react';
import { GridProps, SpaceProps } from 'styled-system';
export interface CellProps extends SpaceProps, GridProps {
    tag?: string;
    css?: string;
    className?: string;
}
export declare const Cell: React.FC<React.PropsWithChildren<CellProps>>;
export default Cell;
