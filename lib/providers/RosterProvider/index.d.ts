import React from 'react';
import { RosterType } from '../../types';
interface RosterContextValue {
    roster: RosterType;
}
export declare const RosterProvider: React.FC<React.PropsWithChildren<unknown>>;
export declare function useRosterState(): RosterContextValue;
export {};
