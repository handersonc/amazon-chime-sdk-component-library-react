import React from 'react';
import { Direction } from '../../../../types';
import { SvgProps } from '../Svg';
interface CaretProps extends SvgProps {
    /** Defines the direction of the caret. */
    direction?: Direction;
    className?: string;
}
declare const Caret: React.FC<React.PropsWithChildren<CaretProps>>;
export default Caret;
