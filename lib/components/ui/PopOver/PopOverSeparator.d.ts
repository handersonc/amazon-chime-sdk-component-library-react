import React, { FC, HTMLAttributes } from 'react';
import { BaseProps } from '../Base';
export interface PopOverSeparatorProps extends Omit<HTMLAttributes<HTMLLIElement>, 'css'>, BaseProps {
}
export declare const PopOverSeparator: FC<React.PropsWithChildren<PopOverSeparatorProps>>;
export default PopOverSeparator;
