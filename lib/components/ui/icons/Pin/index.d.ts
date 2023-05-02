import React from 'react';
import { SvgProps } from '../Svg';
interface PinProps extends SvgProps {
    /** Whether or not should show a Unpin icon. */
    unpin?: boolean;
}
declare const Pin: React.FC<React.PropsWithChildren<PinProps>>;
export default Pin;
