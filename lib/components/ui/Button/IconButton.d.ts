import React from 'react';
import { ButtonProps } from './';
export interface IconButtonProps extends ButtonProps {
    /** Render a component to the top right area of the IconButton */
    badge?: React.ReactNode | React.ReactNode[];
}
export declare const IconButton: React.ForwardRefExoticComponent<IconButtonProps & React.RefAttributes<HTMLButtonElement>>;
export default IconButton;
