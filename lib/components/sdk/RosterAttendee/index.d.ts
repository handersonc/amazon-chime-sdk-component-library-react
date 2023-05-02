import React from 'react';
import { RosterCellProps } from '../../ui/Roster/RosterCell';
import { BaseSdkProps } from '../Base';
export interface RosterAttendeeProps extends Omit<RosterCellProps, 'name'>, BaseSdkProps {
    /** The ID of a Chime meeting attendee. */
    attendeeId: string;
}
export declare const RosterAttendee: React.FC<React.PropsWithChildren<RosterAttendeeProps>>;
export default RosterAttendee;
