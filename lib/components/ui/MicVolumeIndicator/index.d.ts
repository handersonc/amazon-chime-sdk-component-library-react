import React, { HTMLAttributes } from 'react';
import { BaseProps } from '../Base';
export interface MicVolumeIndicatorProps extends Omit<HTMLAttributes<HTMLDivElement>, 'css'>, BaseProps {
    muted?: boolean | undefined;
    signalStrength: number | undefined;
}
export declare const MicVolumeIndicator: React.ForwardRefExoticComponent<MicVolumeIndicatorProps & React.RefAttributes<HTMLDivElement>>;
export default MicVolumeIndicator;
