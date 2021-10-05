import styled from "styled-components";
import { ToastOverlayProps, ToastWrapperProps } from "./Toast.interface";

export const ToastOverlay = styled.div<ToastOverlayProps>`
    position: fixed;
    top: 0;
    right: 40px;
    transition: all 0.15s ease-in-out;
    transform: ${(props) =>
        props.show ? "translateY(50%)" : "translateY(0%)"};
    opacity: ${(props) => (props.show ? 1 : 0)};
    visibility: ${(props) => (props.show ? "visible" : "hidden")};
`;

export const ToastWrapper = styled.div<ToastWrapperProps>`
    background-color: ${(props) => {
        if (props.mode === "danger") {
            return props.theme.toast.backgroundDanger;
        }
        if (props.mode === "success") {
            return props.theme.toast.backgroundSuccess;
        }
        if (props.mode === "warning") {
            return props.theme.toast.backgroundWarning;
        }

        return "white";
    }};
    width: 20rem;
    height: auto;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    color: ${(props) => props.theme.toast.text};
    padding: 1.5rem;
    z-index: 20;
    box-shadow: 6px 15px 63px -20px rgba(133, 132, 132, 0.75);
    -webkit-box-shadow: 6px 15px 63px -20px rgba(133, 132, 132, 0.75);
    -moz-box-shadow: 6px 15px 63px -20px rgba(133, 132, 132, 0.75);
    font-size: 16px;

    > h1 {
        font-size: 18px;
        color: white;
    }
`;

export const ToastBody = styled.div`
    margin-top: 5px;
    margin-bottom: 5px;
`;

export const ToastAction = styled.div`
    display: flex;
    justify-content: flex-end;
`;
