import React, { FC, HTMLAttributes, ReactNode } from 'react';
import { BaseProps } from '../../Base';
import { MessageVariant } from './ChatBubbleContainer';
export interface ChatBubbleProps extends Omit<HTMLAttributes<HTMLDivElement>, 'css'>, BaseProps {
    /** Determines styling for outgoing and incoming messages. */
    variant: MessageVariant;
    /** The name of the user that sent the message. */
    senderName?: string;
    /** The timestamp of the message being sent. */
    timestamp?: string;
    /** Adds the bubble tail style to a message. */
    showTail?: boolean;
    /** Determines if the message has been removed after being sent. */
    redacted?: boolean;
    /** Includes other elements or components, such as a message attachment. */
    children?: ReactNode | ReactNode[];
}
export declare const ChatBubble: FC<React.PropsWithChildren<ChatBubbleProps>>;
export default ChatBubble;
