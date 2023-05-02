import React from 'react';
import { SvgProps } from '../Svg';
interface DockProps extends SvgProps {
    /** Whether or not should show a undock icon. */
    undock?: boolean;
}
declare const Dock: React.FC<React.PropsWithChildren<DockProps>>;
export default Dock;
