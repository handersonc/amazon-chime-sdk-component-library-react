import React, { FC, HTMLAttributes } from 'react';
import { BaseProps } from '../Base';
export declare type ControlBarLayout = 'top' | 'bottom' | 'right' | 'left' | 'undocked-horizontal' | 'undocked-vertical';
export interface ControlBarProps extends Omit<HTMLAttributes<HTMLDivElement>, 'css'>, BaseProps {
    /** Whether or not the labels of the control bar items should show. */
    showLabels: boolean;
    /** The layout of the control bar, available options are: `top`, `bottom`, `right`, `left`, `undocked-horizontal`, and `undocked-vertical`. */
    layout: ControlBarLayout;
    responsive?: boolean;
}
export declare const ControlBar: FC<React.PropsWithChildren<ControlBarProps>>;
export default ControlBar;
