import React, { FC, HTMLAttributes, ReactNode } from 'react';
import { BaseProps } from '../../Base';
export interface ChannelItemProps extends Omit<HTMLAttributes<HTMLLIElement & HTMLLIElement>, 'css'>, BaseProps {
    name: string;
    actions?: ReactNode | ReactNode[];
    /** Determines if the channel is currently selected and can show actions. */
    isSelected?: boolean;
    /** Callback function when clicked */
    onClick: () => void;
    /** Signifies if there are unread message in the channel. */
    unread?: boolean;
    /** Content of the badge signaling unread messages, such as a badge displaying the number. */
    unreadBadgeLabel?: string;
    lastChannelMessage?: string;
    lastChannelMessageTimestamp?: string;
}
export declare const ChannelItem: FC<React.PropsWithChildren<ChannelItemProps>>;
export default ChannelItem;
