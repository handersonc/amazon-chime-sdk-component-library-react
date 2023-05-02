import React, { ChangeEvent, ReactNode } from 'react';
import { BaseProps, FocusableProps } from '../Base';
import { Tooltipable } from '../WithTooltip';
export interface RosterHeaderProps extends BaseProps, FocusableProps, Tooltipable {
    /** The title of the roster header, or an element that can render in this area */
    title: string | ReactNode;
    /** The number of attendees in a meeing. */
    badge?: number;
    /** The string value to search in a roster. */
    searchValue?: string;
    /** The callback fired when the search value is changed. */
    onSearch?: (e: ChangeEvent<HTMLInputElement>) => void;
    /** The callback fired when roster is closed. */
    onClose?: () => void;
    /** The PopOver menu for more options. */
    menu?: React.ReactNode;
    /** The label for availability. */
    a11yMenuLabel?: string;
    /** Label shown for search icon button, by default it is "Open search" */
    searchLabel?: string;
    /** Label shown for close icon button, by default it is "Close" */
    closeLabel?: string;
    /** Use children to render custom elements in the RosterHeader */
    children?: ReactNode | ReactNode[];
}
export declare const RosterHeader: React.FC<React.PropsWithChildren<RosterHeaderProps>>;
export default RosterHeader;
