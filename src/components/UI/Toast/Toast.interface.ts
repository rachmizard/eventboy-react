export interface ToastProps {
    title?: string;
    message?: string;
    show?: boolean;
    mode?: "danger" | "success" | "warning";
    timeout?: number;
    onCloseToast: () => void;
}

export interface ToastOverlayProps {
    show?: boolean;
}

export interface ToastWrapperProps {
    mode?: "danger" | "success" | "warning";
}
