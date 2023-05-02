import { BaseProps } from '../../Base';
import { MessageVariant } from './ChatBubbleContainer';
interface StyledChatBubbleContainerProps extends BaseProps {
    actions?: any;
}
interface StyledChatBubbleProps extends BaseProps {
    variant: MessageVariant;
    editable?: boolean;
}
export declare const StyledChatBubbleContainer: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, StyledChatBubbleContainerProps, never>;
export declare const StyledChatBubble: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, StyledChatBubbleProps, never>;
export declare const StyledChatBubbleInfo: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export {};
