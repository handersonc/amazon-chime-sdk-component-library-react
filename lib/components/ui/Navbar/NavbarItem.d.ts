import { ReactNode } from 'react';
import { IconButtonProps } from '../Button/IconButton';
import { Placement } from '../PopOver';
import { Tooltipable } from '../WithTooltip';
export interface NavbarItemProps extends IconButtonProps, Tooltipable {
    icon: any;
    onClick: () => void;
    label: string;
    badge?: ReactNode | ReactNode[];
    selected?: boolean;
    children?: ReactNode | ReactNode[];
    placement?: Placement;
    showLabel?: boolean;
    testId?: string;
}
export declare const NavbarItem: ({ label, children, placement, icon, showLabel, badge, onClick, testId, tooltipContainerId, ...rest }: NavbarItemProps) => JSX.Element;
export default NavbarItem;
