import React, { FC, HTMLAttributes } from 'react';
import { BaseProps } from '../../Base';
export interface MessageAttachmentProps extends Omit<HTMLAttributes<HTMLDivElement>, 'css'>, BaseProps {
    /** The name of the attachment. */
    name: string;
    /** The file URL string to download attachment. */
    downloadUrl: string;
    /** Determines whether render image of the attachment. */
    renderImg?: boolean;
    /** The URL of the image. */
    imgUrl?: string;
    /** The style of the image. */
    imgStyles?: string;
    /** How to handle onClick of the image. */
    imgOnClick?: () => void;
    /** How to handle onLoad of the image. */
    imgOnLoad?: () => void;
    /** The size of attachment. */
    size?: string;
}
export declare const MessageAttachment: FC<React.PropsWithChildren<MessageAttachmentProps>>;
export default MessageAttachment;
