import React, { FC, HTMLAttributes, ReactNode } from 'react';
import { BaseProps } from '../../Base';
import { Tooltipable } from '../../WithTooltip';
export declare type Message = {
    /** The displayed text of the message sent. */
    content: string;
    /** The timestamp when the message was originally sent by the sender. */
    createdTimestamp: string;
    /** The timestamp of the last time the message was edited. */
    lastEditedTimestamp?: string;
    /** Determines if a message was redacted (deleted) by a user. */
    redacted: boolean;
    /** The display name of the sender. */
    senderName: string;
    /** The unique identifier of the sender. */
    senderId: string;
};
export declare type MessageVariant = 'outgoing' | 'incoming';
export interface ChatBubbleContainerProps extends Omit<HTMLAttributes<HTMLDivElement>, 'css'>, BaseProps, Tooltipable {
    /** The time the message was originally sent. */
    timestamp?: string | ReactNode;
    /** This allows for custom elements to be rendered into the optional popover menu for each message, such as an edit button. */
    actions?: ReactNode | ReactNode[];
    /** The label used for availability. */
    a11yLabel?: string;
}
export declare const ChatBubbleContainer: FC<React.PropsWithChildren<ChatBubbleContainerProps>>;
export default ChatBubbleContainer;
