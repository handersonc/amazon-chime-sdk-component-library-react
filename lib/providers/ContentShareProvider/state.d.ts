import { VideoTileState } from 'amazon-chime-sdk-js';
export declare enum ContentActionType {
    STARTING = 0,
    DID_STOP = 1,
    UPDATE = 2,
    TOGGLE_PAUSE = 3,
    REMOVE = 4,
    DENIED = 5,
    RESET = 6
}
declare type StartingAction = {
    type: ContentActionType.STARTING;
    payload?: any;
};
declare type DidStopAction = {
    type: ContentActionType.DID_STOP;
    payload?: any;
};
declare type UpdateAction = {
    type: ContentActionType.UPDATE;
    payload: UpdatePayload;
};
declare type UpdatePayload = {
    isLocalUser: boolean;
    tileState: VideoTileState;
};
declare type TogglePauseAction = {
    type: ContentActionType.TOGGLE_PAUSE;
    payload?: any;
};
declare type RemoveAction = {
    type: ContentActionType.REMOVE;
    payload: number;
};
declare type DeniedAction = {
    type: ContentActionType.DENIED;
    payload?: any;
};
declare type ResetAction = {
    type: ContentActionType.RESET;
    payload?: any;
};
export declare type Action = StartingAction | DidStopAction | UpdateAction | TogglePauseAction | RemoveAction | DeniedAction | ResetAction;
export declare type ContentShareState = {
    tileId: number | null;
    paused: boolean;
    isLocalShareLoading: boolean;
    isLocalUserSharing: boolean;
    sharingAttendeeId: string | null;
};
export declare const initialState: ContentShareState;
export declare function reducer(state: ContentShareState, { type, payload }: Action): ContentShareState;
export {};
