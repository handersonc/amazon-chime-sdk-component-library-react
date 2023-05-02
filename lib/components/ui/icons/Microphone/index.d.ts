import React from 'react';
import { SvgProps } from '../Svg';
export interface MicrophoneProps extends SvgProps {
    /** Whether or not should show muted status. */
    muted?: boolean;
    /** Whether or not should show poor connected status. */
    poorConnection?: boolean;
    /** Title attribute for the icon when muted, it defaults to `Muted microphone` */
    mutedTitle?: string;
    /** Title attribute for the icon when unmuted, it defaults to `Microphone` */
    unmutedTitle?: string;
}
declare const Microphone: React.FC<React.PropsWithChildren<MicrophoneProps>>;
export default Microphone;
