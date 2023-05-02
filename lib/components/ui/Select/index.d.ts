import React, { ChangeEvent, InputHTMLAttributes } from 'react';
export declare type SelectOptions = {
    value: string | number;
    label: string;
};
export interface SelectProps extends InputHTMLAttributes<HTMLSelectElement> {
    /** Options */
    options: SelectOptions[];
    /** The callback fired when the option is changed. */
    onChange(event: ChangeEvent): void;
    /** The selected option */
    value: string;
}
export declare const Select: React.ForwardRefExoticComponent<SelectProps & React.RefAttributes<HTMLSelectElement>>;
export default Select;
