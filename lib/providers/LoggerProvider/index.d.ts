import { Logger } from 'amazon-chime-sdk-js';
import React from 'react';
export declare const LoggerContext: React.Context<Logger>;
interface Props {
    logger: Logger;
}
export declare const LoggerProvider: React.FC<React.PropsWithChildren<Props>>;
export declare const useLogger: () => Logger;
export {};
