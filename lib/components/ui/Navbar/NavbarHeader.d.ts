import React from 'react';
import { BaseProps, FocusableProps } from '../Base';
export interface NavbarHeaderProps extends BaseProps, FocusableProps {
    /** The title of the navigation bar menu */
    title: string;
    /** The callback fired when the navigation bar is closed */
    onClose?: () => void;
}
export declare const NavbarHeader: React.FC<React.PropsWithChildren<NavbarHeaderProps>>;
export default NavbarHeader;
