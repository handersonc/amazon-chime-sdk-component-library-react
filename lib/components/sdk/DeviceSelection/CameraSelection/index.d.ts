import React from 'react';
import { BaseSdkProps } from '../../Base';
interface Props extends BaseSdkProps {
    /** The message that will be shown when no camera devices are found. */
    notFoundMsg?: string;
    /** The label that will be shown for camera selection, it defaults to "Camera source". */
    label?: string;
}
export declare const CameraSelection: React.FC<React.PropsWithChildren<Props>>;
export default CameraSelection;
