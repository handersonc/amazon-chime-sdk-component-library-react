import React from 'react';
import { BaseSdkProps } from '../../Base';
interface Props extends BaseSdkProps {
    /** The message that will be shown when no microphone devices are found. */
    notFoundMsg?: string;
    /** The label that will be shown for microphone selection, it defaults to `Microphone source`. */
    label?: string;
}
export declare const MicSelection: React.FC<React.PropsWithChildren<Props>>;
export default MicSelection;
