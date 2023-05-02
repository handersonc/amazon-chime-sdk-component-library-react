import React from 'react';
import { IconButtonProps } from '../Button/IconButton';
import { Tooltipable } from '../WithTooltip';
interface PopOverMenuProps extends Tooltipable {
    menu: React.ReactNode;
    a11yMenuLabel?: string;
    buttonProps?: Partial<IconButtonProps>;
}
export declare const PopOverMenu: ({ menu, buttonProps, tooltipContainerId, a11yMenuLabel, ...rest }: PopOverMenuProps) => JSX.Element;
export {};
