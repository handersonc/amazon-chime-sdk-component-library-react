import React, { FC } from 'react';
interface UserActivityState {
    isUserActive: boolean | null;
}
export declare const UserActivityContext: React.Context<UserActivityState | null>;
export declare const UserActivityProvider: FC<React.PropsWithChildren<unknown>>;
export declare function useUserActivityState(): UserActivityState;
export {};
