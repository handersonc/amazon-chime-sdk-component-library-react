import React from 'react';
import { Action, ActionType, NotificationType, Severity, StateType } from './state';
export declare const NotificationProvider: React.FC<React.PropsWithChildren<unknown>>;
export declare const useNotificationState: () => StateType;
export declare const useNotificationDispatch: () => React.Dispatch<Action>;
export { Severity, NotificationType, ActionType, Action };
