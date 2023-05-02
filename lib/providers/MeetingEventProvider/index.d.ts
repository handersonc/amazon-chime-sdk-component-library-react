import { EventAttributes, EventName } from 'amazon-chime-sdk-js';
import React from 'react';
declare type MeetingEventProviderContextType = {
    name: EventName;
    attributes: EventAttributes;
} | undefined;
export declare const MeetingEventProviderContext: React.Context<MeetingEventProviderContextType>;
export declare const MeetingEventProvider: React.FC<React.PropsWithChildren<unknown>>;
export declare const useMeetingEvent: () => MeetingEventProviderContextType;
export {};
