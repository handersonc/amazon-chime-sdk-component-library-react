import React, { FC, InputHTMLAttributes } from 'react';
export interface RadioProps {
    /** Whether or not the radio is selected. */
    checked?: boolean;
    /** The icon for the radio. */
    icon?: JSX.Element;
    /** The label of the radio. */
    label: string;
    /** The value of the radio. */
    value: string;
    /** The callback fired when the state is changed. */
    onChange: (event: any) => void;
    /** Other props of the radio. */
    radioProps?: InputHTMLAttributes<HTMLButtonElement>;
    testId?: string;
}
export declare const Radio: FC<React.PropsWithChildren<RadioProps>>;
export default Radio;
