import { AudioTransformDevice, Device, VideoTransformDevice } from 'amazon-chime-sdk-js';
export declare const isOptionActive: (selectedDevice: Device | AudioTransformDevice | VideoTransformDevice | null | undefined, currentDeviceId: string) => Promise<boolean>;
export declare const getDeviceId: (device: Device | AudioTransformDevice | VideoTransformDevice | null | undefined) => Promise<string>;
export declare function isPrevNextUndefined<T>(prev: T, next: T): boolean;
export declare function isPrevNextEmpty<T>(prev: T, next: T): boolean;
