import React from 'react';
import { BaseSdkProps } from '../Base';
interface Props extends BaseSdkProps {
    /** The label that will be shown when microphone is muted, it defaults to `Mute`. */
    muteLabel?: string;
    /** The label that will be shown when microphone is unmuted, it defaults to `Unmute`. */
    unmuteLabel?: string;
    /** Title attribute for the icon when muted, it defaults to `Muted microphone` in <Microphone />. */
    mutedIconTitle?: string;
    /** Title attribute for the icon when unmuted, it defaults to `Microphone` in <Microphone />. */
    unmutedIconTitle?: string;
    /** The label that will be shown when the current input audio is an Amazon Voice Focus device,
     *  it defaults to `Amazon Voice Focus enabled`. */
    voiceFocusOnLabel?: string;
    /** The label that will be shown when the current input audio is not an Amazon Voice Focus device,
     *  it defaults to `Enable Amazon Voice Focus`. */
    voiceFocusOffLabel?: string;
}
export declare const AudioInputVFControl: React.FC<React.PropsWithChildren<Props>>;
export default AudioInputVFControl;
