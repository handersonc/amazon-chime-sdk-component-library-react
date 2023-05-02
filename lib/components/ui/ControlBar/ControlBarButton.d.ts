import React, { FC, ReactNode } from 'react';
import { BaseProps } from '../Base';
import { Placement } from '../PopOver';
import { PopOverItemProps } from '../PopOver/PopOverItem';
import { Tooltipable } from '../WithTooltip';
export interface ControlBarButtonProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'css'>, BaseProps, Tooltipable {
    /** The icon of the control bar item. */
    icon: JSX.Element;
    /** The callback fired when the item is clicked. */
    onClick: () => void;
    /** The label of an control bar item. */
    label: string;
    /** The items to render in a popover menu. When passed, the button will render an arrow to open or close a popover menu. Refer to [PopOverItem](/docs/ui-components-popover--basic-pop-over-menu) */
    popOver?: PopOverItemProps[] | null;
    /** Defines the placement of PopOver menu. */
    popOverPlacement?: Placement;
    /** The label for the optional popOver button. */
    popOverLabel?: string;
    /**  Apply this prop to receive visual feedback that the button is 'active' */
    isSelected?: boolean;
    /** Use children to define an alternative to popOver prop with a custom set of elements to be rendered into the popover */
    children?: ReactNode | ReactNode[];
}
export declare const ControlBarButton: FC<React.PropsWithChildren<ControlBarButtonProps>>;
export default ControlBarButton;
