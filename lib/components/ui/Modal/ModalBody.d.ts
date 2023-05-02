import React, { FC, HTMLAttributes } from 'react';
import { BaseProps } from '../Base';
interface ModalBodyProps extends Omit<HTMLAttributes<HTMLDivElement>, 'css'>, BaseProps {
}
export declare const ModalBody: FC<React.PropsWithChildren<ModalBodyProps>>;
export default ModalBody;
