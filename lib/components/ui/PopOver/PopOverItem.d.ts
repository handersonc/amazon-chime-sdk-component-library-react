import React, { FC } from 'react';
export declare type PopOverItemType = 'a' | 'button';
export interface PopOverItemProps {
    /** The callback fired when the item is clicked. */
    onClick?: () => void;
    /** Whether or not the item is checked. */
    checked?: boolean;
    /** The elements that populate the content of the item. */
    children?: React.ReactElement<any> | React.ReactElement<any>[];
    /** Whether or not the item is disabled. */
    disabled?: boolean;
    /** Defines the href attribute if the item is rendered as an `a` tag. */
    href?: string;
    /** Defines which tag will the item be rendered as, it defaults to `button`. */
    as?: PopOverItemType;
    /** Whether or not the item has a border. */
    border?: boolean;
    testId?: string;
}
export declare const PopOverItem: FC<React.PropsWithChildren<PopOverItemProps>>;
export default PopOverItem;
