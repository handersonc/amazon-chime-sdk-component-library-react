import React from 'react';
import { BaseProps, FocusableProps } from '../Base';
import { FlexProps } from '../Flex';
export interface NavbarProps extends FlexProps, BaseProps, FocusableProps {
    /** Classname to apply custom CSS styles */
    className?: string;
    /** Any react components or HTML elements */
    children?: any;
    /** optionally render a responsive layout at mobile breakpoints  */
    responsive?: boolean;
}
export declare const Navbar: React.FC<React.PropsWithChildren<NavbarProps>>;
export default Navbar;
