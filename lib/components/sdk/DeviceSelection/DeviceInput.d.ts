import { AudioTransformDevice, Device, VideoTransformDevice } from 'amazon-chime-sdk-js';
import React from 'react';
import { DeviceType } from '../../../types';
import { BaseSdkProps } from '../Base';
interface Props extends BaseSdkProps {
    label: string;
    notFoundMsg: string;
    devices: DeviceType[];
    selectedDevice: Device | AudioTransformDevice | VideoTransformDevice | null | undefined;
    onChange: (deviceId: string) => void;
}
declare const DeviceInput: React.FC<React.PropsWithChildren<Props>>;
export default DeviceInput;
