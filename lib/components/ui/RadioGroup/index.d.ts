import React, { ChangeEvent, FC, InputHTMLAttributes } from 'react';
export interface RadioProps {
    label: string;
    value: string;
    icon?: JSX.Element;
    inputProps?: InputHTMLAttributes<HTMLButtonElement>;
    testId?: string;
}
export interface RadioGroupProps {
    /** The callback fired when the state is changed. */
    onChange(event: ChangeEvent): void;
    /** Options of radio group. */
    options: RadioProps[];
    /** The selected option. */
    value: string;
}
export declare const RadioGroup: FC<React.PropsWithChildren<RadioGroupProps>>;
export default RadioGroup;
