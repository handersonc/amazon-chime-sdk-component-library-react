/// <reference types="react" />
export declare const ModalContext: import("react").Context<{
    onClose(): void;
    labelID: string;
    dismissible: boolean;
}>;
export declare const useModalContext: () => {
    onClose(): void;
    labelID: string;
    dismissible: boolean;
};
export default ModalContext;
