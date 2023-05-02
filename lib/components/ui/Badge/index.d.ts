import React, { FC } from 'react';
import { BaseProps } from '../Base';
export interface BadgeProps extends BaseProps {
    /** The value shows in the badge*/
    value: string | number | JSX.Element;
    /** The status of the badge */
    status?: 'default' | 'alert';
}
export declare const Badge: FC<React.PropsWithChildren<BadgeProps>>;
export default Badge;
