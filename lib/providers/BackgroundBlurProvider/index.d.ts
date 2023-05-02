import { BackgroundBlurOptions, BackgroundBlurProcessor, BackgroundFilterSpec, DefaultVideoTransformDevice, Device } from 'amazon-chime-sdk-js';
import React, { FC } from 'react';
import { BaseSdkProps } from '../../components/sdk/Base';
interface Props extends BaseSdkProps {
    /** The spec defines the assets that will be used for adding background blur to a frame. For more information, refer to
     * [Amazon Chime SDK for JavaScript Background Filter Guide](https://github.com/aws/amazon-chime-sdk-js/blob/main/guides/15_Background_Filter_Video_Processor.md#adding-a-background-filter-to-your-application). */
    spec?: BackgroundFilterSpec;
    /** A set of options that can be supplied when creating a background blur video frame processor. For more information, refer to
     * [Amazon Chime SDK for JavaScript Background Filter Guide](https://github.com/aws/amazon-chime-sdk-js/blob/main/guides/15_Background_Filter_Video_Processor.md#adding-a-background-filter-to-your-application). */
    options?: BackgroundBlurOptions;
}
interface BackgroundBlurProviderState {
    createBackgroundBlurDevice: (device: Device) => Promise<DefaultVideoTransformDevice>;
    isBackgroundBlurSupported: boolean | undefined;
    backgroundBlurProcessor: BackgroundBlurProcessor | undefined;
}
export declare const BackgroundBlurProvider: FC<React.PropsWithChildren<Props>>;
export declare const useBackgroundBlur: () => BackgroundBlurProviderState;
export {};
