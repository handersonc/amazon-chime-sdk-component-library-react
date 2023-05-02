import React, { FC, HTMLAttributes } from 'react';
import { BaseProps } from '../Base';
export interface PopOverSubMenuProps extends Omit<HTMLAttributes<HTMLUListElement>, 'css'>, BaseProps {
    children?: JSX.Element | JSX.Element[];
    /** The text shown in the item. */
    text: string;
}
export declare const PopOverSubMenu: FC<React.PropsWithChildren<PopOverSubMenuProps>>;
export default PopOverSubMenu;
