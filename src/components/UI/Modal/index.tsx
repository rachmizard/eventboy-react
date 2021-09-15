import { ModalContext } from "contexts/ModalContext";
import React, { useCallback, useContext, useEffect } from "react";
import { ModalProps } from "./Modal.interface";
import { ModalDialog, ModalOverlay } from "./Modal.style";

const Modal: React.FC<ModalProps> = ({ children, show }) => {
	const modalContext = useContext(ModalContext);

	const dismissModal = useCallback(() => {
		modalContext?.dismissModal();
	}, [modalContext]);

	useEffect(() => {
		function onEsc(event: KeyboardEvent) {
			if (modalContext?.show) {
				if (event.key === "Escape") dismissModal();
			}
		}

		document.addEventListener("keyup", onEsc);

		return () => document.removeEventListener("keyup", onEsc);
	}, [dismissModal, modalContext]);

	return (
		<ModalOverlay showModal={modalContext?.show}>
			<ModalDialog>{children}</ModalDialog>
		</ModalOverlay>
	);
};

export default Modal;
