import React from 'react';
import { Direction } from '../../../../types';
import { SvgProps } from '../Svg';
interface ArrowProps extends SvgProps {
    /** Defines the direction of the arrow. */
    direction?: Direction;
}
declare const Arrow: React.FC<React.PropsWithChildren<ArrowProps>>;
export default Arrow;
