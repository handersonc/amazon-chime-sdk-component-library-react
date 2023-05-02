import React from 'react';
import { BaseSdkProps } from '../../Base';
interface Props extends BaseSdkProps {
    /** Label shown for video filter selection, by default it is "Blur my background" */
    label?: string;
}
export declare const BackgroundBlurCheckbox: React.FC<React.PropsWithChildren<Props>>;
export default BackgroundBlurCheckbox;
