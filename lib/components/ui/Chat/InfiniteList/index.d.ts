import React, { FC, HTMLAttributes, ReactNode } from 'react';
import { BaseProps } from '../../Base';
export interface InfiniteListProps extends Omit<HTMLAttributes<HTMLUListElement>, 'css'>, BaseProps {
    onLoad: () => void;
    isLoading: boolean;
    items: ReactNode[];
}
export declare const InfiniteList: FC<React.PropsWithChildren<InfiniteListProps>>;
export default InfiniteList;
