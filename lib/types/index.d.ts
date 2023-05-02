import { AudioInputDevice, VideoInputDevice } from 'amazon-chime-sdk-js';
export declare type Direction = 'up' | 'right' | 'down' | 'left';
export declare type DeviceType = {
    deviceId: string;
    label: string;
};
export declare type AudioInputContextType = {
    devices: DeviceType[];
    selectedDevice: AudioInputDevice | undefined;
};
export declare type AudioOutputContextType = {
    devices: DeviceType[];
    selectedDevice: string | null;
};
export declare type VideoInputContextType = {
    devices: DeviceType[];
    selectedDevice: VideoInputDevice | undefined;
};
export declare type LocalAudioOutputContextType = {
    isAudioOn: boolean;
    toggleAudio: () => void;
};
export declare type LocalVideoContextType = {
    tileId: null | number;
    isVideoEnabled: boolean;
    setIsVideoEnabled: (isEnabled: boolean) => void;
    hasReachedVideoLimit: boolean;
    setHasReachedVideoLimit: (hasReached: boolean) => void;
    toggleVideo: () => Promise<void>;
};
export declare type ContentShareControlContextType = {
    paused: boolean;
    toggleContentShare: (source?: string | MediaStream) => Promise<void>;
    togglePauseContentShare: () => void;
};
export declare enum MeetingStatus {
    Loading = 0,
    Succeeded = 1,
    Failed = 2,
    Ended = 3,
    JoinedFromAnotherDevice = 4,
    Left = 5,
    TerminalFailure = 6,
    Reconnecting = 7
}
export declare type RosterAttendeeType = {
    chimeAttendeeId: string;
    externalUserId?: string;
    name?: string;
};
export declare type RosterType = {
    [attendeeId: string]: RosterAttendeeType;
};
export declare enum DeviceLabelTriggerStatus {
    UNTRIGGERED = "UNTRIGGERED",
    IN_PROGRESS = "IN_PROGRESS",
    GRANTED = "GRANTED",
    DENIED = "DENIED"
}
export declare enum DeviceLabels {
    None = 1,
    Audio = 2,
    Video = 3,
    AudioAndVideo = 4
}
export declare type DeviceLabelTrigger = () => Promise<MediaStream>;
export declare type MeetingFeatures = {
    Audio: {
        [key: string]: string;
    };
};
export declare type CreateMeetingResponse = {
    MeetingFeatures: MeetingFeatures;
};
export declare type JoinMeetingInfo = {
    Meeting: CreateMeetingResponse;
    Attendee: string;
};
