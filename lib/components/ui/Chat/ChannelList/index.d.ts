import React, { FC, HTMLAttributes } from 'react';
import { BaseProps } from '../../Base';
export interface ChannelListProps extends Omit<HTMLAttributes<HTMLUListElement & HTMLLIElement>, 'css'>, BaseProps {
}
export declare const ChannelList: FC<React.PropsWithChildren<ChannelListProps>>;
export default ChannelList;
