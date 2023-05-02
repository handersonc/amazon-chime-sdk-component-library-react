declare type tileMap = {
    [key: string]: string;
};
declare type attendeeMap = {
    [key: string]: number;
};
export declare type State = {
    tiles: number[];
    tileIdToAttendeeId: tileMap;
    attendeeIdToTileId: attendeeMap;
    size: number;
};
export declare enum VideoTileActionType {
    UPDATE = 0,
    REMOVE = 1,
    RESET = 2
}
declare type UpdateAction = {
    type: VideoTileActionType.UPDATE;
    payload: {
        tileId: number;
        attendeeId: string;
    };
};
declare type RemoveAction = {
    type: VideoTileActionType.REMOVE;
    payload: {
        tileId: number;
        attendeeId?: string;
    };
};
declare type ResetAction = {
    type: VideoTileActionType.RESET;
    payload?: any;
};
export declare type Action = UpdateAction | RemoveAction | ResetAction;
export declare const initialState: State;
export declare function reducer(state: State, { type, payload }: Action): State;
export {};
