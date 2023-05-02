import React, { FC, HTMLAttributes, ReactElement } from 'react';
import { BaseProps } from '../Base';
export interface ModalButtonGroupProps extends Omit<HTMLAttributes<HTMLDivElement>, 'css'>, BaseProps {
    /** Defines the primary button(s) in the modal. */
    primaryButtons: ReactElement | ReactElement[];
    /** Defines the secondary button(s) in the modal. */
    secondaryButtons?: ReactElement | ReactElement[];
}
export declare const ModalButtonGroup: FC<React.PropsWithChildren<ModalButtonGroupProps>>;
export default ModalButtonGroup;
