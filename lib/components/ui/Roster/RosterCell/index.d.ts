import React from 'react';
import { BaseProps, FocusableProps } from '../../Base';
import { IconButtonProps } from '../../Button/IconButton';
import { Tooltipable } from '../../WithTooltip';
declare type MicPosition = 'leading' | 'grouped';
export interface RosterCellProps extends BaseProps, FocusableProps, Tooltipable {
    /** The primary name in the roster cell. */
    name: string;
    /** The subtitle for the primary name. */
    subtitle?: string;
    /** The running late message. */
    runningLate?: string;
    /** The position to place microphone icon. */
    micPosition?: MicPosition;
    /** Whether or not the attendee is muted. This is ignored if you pass a custom microphone via the microphone prop. */
    muted?: boolean;
    /** Whether or not the attendee has enabled their local video. */
    videoEnabled?: boolean;
    /** Whether or not the attendee is sharing content. */
    sharingContent?: boolean;
    /** Whether or not the attendee is having poor connection, it defaults to `false`. This is ignored if you pass a custom microphone via the microphone prop. */
    poorConnection?: boolean;
    /** A replacement for the default volume icon, such as the `MicrophoneActivity` component. */
    microphone?: React.ReactNode;
    /** The PopOver menu for more options. */
    menu?: React.ReactNode;
    /** The label for availability, it defaults to an empty string. */
    a11yMenuLabel?: string;
    /** The icon to depict moderator or presentor status . */
    extraIcon?: React.ReactNode;
    /** extra properties to pass through to the menu button */
    buttonProps?: Partial<IconButtonProps>;
}
export declare const RosterCell: React.FC<React.PropsWithChildren<RosterCellProps>>;
export default RosterCell;
