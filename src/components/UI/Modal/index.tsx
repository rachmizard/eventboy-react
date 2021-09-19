import React, { useCallback, useEffect } from "react";
import { ModalProps } from "./Modal.interface";
import { ModalDialog, ModalOverlay } from "./Modal.style";

const Modal: React.FC<ModalProps> = ({ children, show, onDismissModal }) => {
	const dismissModal = useCallback(() => {
		onDismissModal();
	}, [onDismissModal]);

	useEffect(() => {
		function onEsc(event: KeyboardEvent) {
			if (show) {
				if (event.key === "Escape") dismissModal();
			}
		}

		document.addEventListener("keyup", onEsc);

		return () => document.removeEventListener("keyup", onEsc);
	}, [dismissModal, show]);

	return (
		<ModalOverlay showModal={show}>
			<ModalDialog>{children}</ModalDialog>
		</ModalOverlay>
	);
};

export default Modal;
