import { AudioInputDevice } from 'amazon-chime-sdk-js';
import React from 'react';
import MeetingManager from './MeetingManager';
interface Props {
    onDeviceReplacement?: (nextDevice: string, currentDevice: AudioInputDevice) => Promise<AudioInputDevice>;
    /** Pass a `MeetingManager` instance if you want to share this instance
     * across multiple different `MeetingProvider`s. This approach has limitations.
     * Check `meetingManager` prop documentation for more information.
     */
    meetingManager?: MeetingManager;
}
export declare const MeetingContext: React.Context<MeetingManager | null>;
export declare const MeetingProvider: React.FC<React.PropsWithChildren<Props>>;
export declare const useMeetingManager: () => MeetingManager;
export {};
