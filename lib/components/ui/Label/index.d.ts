import React, { LabelHTMLAttributes } from 'react';
import { BaseProps } from '../Base';
export interface LabelProps extends Omit<LabelHTMLAttributes<HTMLLabelElement>, 'css'>, BaseProps {
}
export declare const Label: React.ForwardRefExoticComponent<LabelProps & React.RefAttributes<HTMLLabelElement>>;
export default Label;
