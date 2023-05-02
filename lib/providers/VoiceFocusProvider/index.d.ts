import { Device, VoiceFocusDeviceOptions, VoiceFocusSpec, VoiceFocusTransformDevice } from 'amazon-chime-sdk-js';
import React from 'react';
import { JoinMeetingInfo } from '../../types';
interface Props {
    /** Determines how you want Amazon Voice Focus to behave. This spec is used to derive a runtime configuration when a transformer is created. */
    spec?: VoiceFocusSpec;
    /**
     * A set of options that can be supplied when creating an Amazon Voice Focus device.
     * For more info, you can go to https://aws.github.io/amazon-chime-sdk-js/interfaces/voicefocusdeviceoptions.html
     */
    options?: VoiceFocusDeviceOptions;
    /** Optional features like Amazon Chime Echo Reduction capability is enabled at the meeting level when CreateMeeting is called. */
    createMeetingResponse?: JoinMeetingInfo;
}
interface VoiceFocusState {
    isVoiceFocusSupported: boolean | undefined;
    addVoiceFocus: (device: Device) => Promise<Device | VoiceFocusTransformDevice>;
}
export declare const VoiceFocusProvider: React.FC<React.PropsWithChildren<Props>>;
export declare const useVoiceFocus: () => VoiceFocusState;
export {};
