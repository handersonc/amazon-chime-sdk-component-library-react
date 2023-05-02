import React, { HTMLAttributes } from 'react';
import { BaseProps } from '../Base';
export interface ButtonProps extends Omit<HTMLAttributes<HTMLButtonElement>, 'css'>, BaseProps {
    /** The icon element to be shown in the button. */
    icon?: JSX.Element;
    /** The text of the button. */
    label: string;
    /** The variant of button. */
    variant?: ButtonVariant;
    /** Whether or not the button is selected. */
    selected?: boolean;
    /** Defines the size of the icon in the button, it defaults to `sm`. */
    iconSize?: IconSize;
    /** Whether or not the button is disabled. **/
    disabled?: boolean;
}
export declare type IconSize = 'sm' | 'md' | 'lg';
export declare type ButtonVariant = 'default' | 'primary' | 'secondary' | 'icon';
export declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;
export default Button;
