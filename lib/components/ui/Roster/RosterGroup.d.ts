import React from 'react';
import { BaseProps, FocusableProps } from '../Base';
export interface RosterGroupProps extends BaseProps, FocusableProps {
    /** The title of the roster group. */
    title?: string;
    /** The number of attendees within one roster group. */
    badge?: number;
}
export declare const RosterGroup: React.FC<React.PropsWithChildren<RosterGroupProps>>;
export default RosterGroup;
