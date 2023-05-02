import { AspectRatio } from '../../../hooks/useElementAspectRatio';
import { VideoGridProps } from './';
interface StyledGridProps extends VideoGridProps {
    ratio?: AspectRatio | null;
    size: number;
    featured: boolean;
}
export declare const StyledGrid: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, StyledGridProps, never>;
export {};
