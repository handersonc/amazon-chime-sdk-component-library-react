import React from 'react';
import { BaseSdkProps } from '../../Base';
interface Props extends BaseSdkProps {
    /** The message that will be shown when no audio output speaker devices are found. */
    notFoundMsg?: string;
    /** The label that will be shown for speaker selection, it defaults to `Speaker source`. */
    label?: string;
    /** The callback fired when the selection is changed.
     *  It is required if you want to add testing functionality around speaker selection. */
    onChange?: (selectedAudioOutputDevice: string) => void;
}
export declare const SpeakerSelection: React.FC<React.PropsWithChildren<Props>>;
export default SpeakerSelection;
