import styled from "styled-components";

export const ModalOverlay = styled.div<{ showModal?: boolean }>`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    backdrop-filter: blur(8px);
    background-color: rgba(0, 0, 0, 0.1);
    opacity: ${(props) => (props.showModal ? 1 : 0)};
    transition: opacity 0.25s ease-in;
    visibility: ${(props) => (props.showModal ? "visible" : "hidden")};
    overflow: hidden;
    width: 100%;
    height: 100%;
    z-index: 999;
`;

export const ModalDialog = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
`;

export const ModalBody = styled.div`
    width: auto;
    height: auto;
`;
