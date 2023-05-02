import React from 'react';
import { ContentShareControlContextType } from '../../types';
import { ContentShareState } from './state';
export declare const ContentShareProvider: React.FC<React.PropsWithChildren<unknown>>;
export declare const useContentShareState: () => ContentShareState;
export declare const useContentShareControls: () => ContentShareControlContextType;
