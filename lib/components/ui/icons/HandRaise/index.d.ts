import React from 'react';
import { SvgProps } from '../Svg';
export interface HandRaiseProps extends SvgProps {
    /** Whether or not should show a raised icon. */
    isRaised?: boolean;
}
declare const HandRaise: React.FC<React.PropsWithChildren<HandRaiseProps>>;
export default HandRaise;
