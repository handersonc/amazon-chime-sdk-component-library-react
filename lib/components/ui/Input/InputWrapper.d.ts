import React, { ReactNode } from 'react';
import { BaseProps } from '../Base';
import { Size } from './';
export interface InputWrapperProps extends BaseProps {
    leadingIcon?: ReactNode;
    sizing?: Size;
    children?: ReactNode | ReactNode[];
}
export declare const InputWrapper: React.ForwardRefExoticComponent<InputWrapperProps & React.RefAttributes<HTMLSpanElement>>;
export default InputWrapper;
