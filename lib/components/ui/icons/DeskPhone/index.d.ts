import React from 'react';
import { SvgProps } from '../Svg';
interface DeskPhoneProps extends SvgProps {
    /** Whether or not should show a desk phone icon with strikethrough. */
    disabled?: boolean;
    /** Whether or not should show a desk phone icon dashed. */
    poorConnection?: boolean;
}
declare const DeskPhone: React.FC<React.PropsWithChildren<DeskPhoneProps>>;
export default DeskPhone;
