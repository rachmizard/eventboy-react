import { Heading } from "components";
import React, { useEffect } from "react";
import { ToastProps } from "./Toast.interface";
import { ToastBody, ToastOverlay, ToastWrapper } from "./Toast.style";

const Toast: React.FC<ToastProps> = ({
    children,
    title,
    show,
    mode,
    onCloseToast,
    timeout,
}) => {
    useEffect(() => {
        if (show) {
            const toastTimeout = setTimeout(() => {
                onCloseToast();
            }, timeout);
            return () => clearTimeout(toastTimeout);
        }
    }, [onCloseToast, show, timeout]);

    return (
        <ToastOverlay show={show}>
            <ToastWrapper mode={mode}>
                <Heading size="md">{title}</Heading>
                <ToastBody>{children}</ToastBody>
            </ToastWrapper>
        </ToastOverlay>
    );
};

Toast.defaultProps = {
    mode: "success",
    timeout: 2000,
};

export default Toast;
