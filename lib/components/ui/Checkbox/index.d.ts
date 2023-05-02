import React, { ChangeEvent, FC } from 'react';
import { BaseProps } from '../Base';
export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'value'>, BaseProps {
    /** The callback fired when the state is changed. */
    onChange: (event?: ChangeEvent | string) => void;
    /** The value of the checkbox. */
    value: string;
    /** Whether or not the checkbox is checked. */
    checked?: boolean;
}
export interface StyledCheckboxProps {
    checked?: boolean;
}
export declare const Checkbox: FC<React.PropsWithChildren<CheckboxProps>>;
export default Checkbox;
