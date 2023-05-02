import React from 'react';
import { BaseSdkProps } from '../Base';
interface Props extends BaseSdkProps {
    /** The label that will be shown when microphone is muted , it defaults to `Mute`. */
    muteLabel?: string;
    /** The label that will be shown when microphone is unmuted, it defaults to `Unmute`. */
    unmuteLabel?: string;
    /** Title attribute for the icon when muted, it defaults to `Muted microphone`. */
    mutedIconTitle?: string;
    /** Title attribute for the icon when unmuted, it defaults to `Microphone`. */
    unmutedIconTitle?: string;
}
export declare const AudioInputControl: React.FC<React.PropsWithChildren<Props>>;
export default AudioInputControl;
