import React from 'react';
import { BaseSdkProps } from '../Base';
interface Props extends BaseSdkProps {
    /** The Chime attendee ID */
    attendeeId: string;
}
export declare const MicrophoneActivity: React.FC<React.PropsWithChildren<Props>>;
export default MicrophoneActivity;
