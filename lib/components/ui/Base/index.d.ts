/// <reference types="react" />
import { SpaceProps } from 'styled-system';
import { BaseSdkProps } from '../../sdk/Base';
export interface BaseProps extends SpaceProps, BaseSdkProps {
    /** Optional tag to render the component as a different HTML tag */
    tag?: any;
    id?: string;
}
export interface FocusableProps {
    /** Optional tab index for keyboard accessibility */
    tabIndex?: number;
    /** onFocus event handler */
    onFocus?: (event: React.FocusEvent<any>) => void;
    /** onBlur event handler */
    onBlur?: (event: React.FocusEvent<any>) => void;
}
export declare const baseStyles: ({ css }: BaseProps) => string;
export declare const baseSpacing: (props: BaseProps) => any;
