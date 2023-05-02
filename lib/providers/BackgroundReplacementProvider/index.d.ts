import { BackgroundFilterSpec, BackgroundReplacementOptions, BackgroundReplacementProcessor, DefaultVideoTransformDevice, Device } from 'amazon-chime-sdk-js';
import React, { FC } from 'react';
import { BaseSdkProps } from '../../components/sdk/Base';
interface Props extends BaseSdkProps {
    /** The spec defines the assets that will be used for adding background replacement to a frame. For more information, refer to
     * [Amazon Chime SDK for JavaScript Background Filter Guide](https://github.com/aws/amazon-chime-sdk-js/blob/main/guides/15_Background_Filter_Video_Processor.md#adding-a-background-filter-to-your-application). */
    spec?: BackgroundFilterSpec;
    options?: BackgroundReplacementOptions;
}
interface BackgroundReplacementProviderState {
    createBackgroundReplacementDevice: (device: Device) => Promise<DefaultVideoTransformDevice>;
    isBackgroundReplacementSupported: boolean | undefined;
    backgroundReplacementProcessor: BackgroundReplacementProcessor | undefined;
}
export declare const BackgroundReplacementProvider: FC<React.PropsWithChildren<Props>>;
export declare const useBackgroundReplacement: () => BackgroundReplacementProviderState;
export {};
