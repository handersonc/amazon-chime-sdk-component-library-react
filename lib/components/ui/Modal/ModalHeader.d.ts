import React, { FC, HTMLAttributes } from 'react';
import { BaseProps } from '../Base';
export interface ModalHeaderProps extends Omit<HTMLAttributes<HTMLDivElement>, 'css'>, BaseProps {
    /** The title of the header in the modal. */
    title: string;
    /** Whether or not the close icon is shown on the modal. */
    displayClose?: boolean;
}
export declare const ModalHeader: FC<React.PropsWithChildren<ModalHeaderProps>>;
export default ModalHeader;
