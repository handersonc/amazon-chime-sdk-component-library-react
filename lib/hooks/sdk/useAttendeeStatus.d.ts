interface RosterAttendeeStatus {
    muted: boolean;
    videoEnabled: boolean;
    sharingContent: boolean;
    signalStrength: number;
}
export declare function useAttendeeStatus(attendeeId: string): RosterAttendeeStatus;
export default useAttendeeStatus;
