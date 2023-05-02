import React, { ChangeEvent, ReactNode } from 'react';
import { BaseProps } from '../Base';
export declare type Size = 'sm' | 'md';
export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'value' | 'css'>, BaseProps {
    /** The callback fired when the state is changed. */
    onChange(event: ChangeEvent): void;
    /** The callback fired when the input value is cleared. */
    onClear?(): void;
    /** The icon in the input. */
    leadingIcon?: ReactNode;
    /** The size of the input. */
    sizing?: Size;
    /** The value of the input. */
    value: string;
    /** The id of the input. */
    id?: string;
    /** Whether or not the clear icon is shown, it defaults to `true`. */
    showClear?: boolean;
}
export declare const Input: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<HTMLInputElement>>;
export default Input;
