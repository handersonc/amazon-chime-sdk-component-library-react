import React from 'react';
import { BaseSdkProps } from '../../Base';
interface Props extends BaseSdkProps {
    /** Label shown for video quality selection, by default it is "Video quality" */
    label?: string;
    /** Label shown in the dropdown when no video quality has been selected yet, by default it is "Select video quality" */
    labelForUnselected?: string;
}
export declare const QualitySelection: React.FC<React.PropsWithChildren<Props>>;
export default QualitySelection;
