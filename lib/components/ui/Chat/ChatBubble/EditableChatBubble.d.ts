import React, { FC, HTMLAttributes } from 'react';
import { BaseProps } from '../../Base';
import { MessageVariant } from './ChatBubbleContainer';
export interface EditableChatBubbleProps extends Omit<HTMLAttributes<HTMLDivElement>, 'css'>, BaseProps {
    /** Determines styling for outgoing and incoming messages. */
    variant: MessageVariant;
    /** The name of the user that sent the message. */
    senderName: string;
    /** The text content of the message. */
    content: string;
    /** Determines if the name should be shown or not. */
    showName?: boolean;
    /** Adds the bubble tail style to a message. */
    showTail?: boolean;
    /** A callback function to edit the message's content. */
    save: (e: any, newContent: string) => void;
    /** The button label for saving an edit. */
    saveLabel?: string;
    /** A callback function that changes the UI to allow the user to edit the content of the message */
    cancel: (e: any) => void;
    /** The button label for canceling an edit. */
    cancelLabel?: string;
}
export declare const EditableChatBubble: FC<React.PropsWithChildren<EditableChatBubbleProps>>;
export default EditableChatBubble;
