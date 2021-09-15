import styled from "styled-components";

export const ModalOverlay = styled.div<{ showModal?: boolean }>`
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	backdrop-filter: blur(8px);
	background-color: rgba(0, 0, 0, 0.1);
	opacity: ${(props) => (props.showModal ? 1 : 0)};
	transition: opacity 0.25s ease-in;
	visibility: ${(props) => (props.showModal ? "visible" : "hidden")};
	z-index: 999;
`;

export const ModalDialog = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100vw;
	height: 100vh;
`;
