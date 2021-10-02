import React, { useCallback, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import { ModalProps } from "./Modal.interface";
import { ModalBody, ModalDialog, ModalOverlay } from "./Modal.style";

const Modal: React.FC<ModalProps> = ({ children, show, onDismissModal }) => {
  const dismissModal = useCallback(() => {
    onDismissModal();
  }, [onDismissModal]);

  const modalBodyRef = useRef<any | HTMLDivElement>();

  useEffect(() => {
    function onEsc(event: KeyboardEvent) {
      if (show) {
        if (event.key === "Escape") dismissModal();
      }
    }

    function handlingClickOutside(event: MouseEvent) {
      if (show) {
        if (
          modalBodyRef.current &&
          !modalBodyRef.current.contains(event.target)
        ) {
          onDismissModal();
        }
      }
    }

    document.addEventListener("keyup", onEsc);
    document.addEventListener("click", handlingClickOutside);

    return () => {
      document.removeEventListener("keyup", onEsc);
      document.removeEventListener("click", handlingClickOutside);
    };
  }, [dismissModal, onDismissModal, show]);

  return (
    <>
      {ReactDOM.createPortal(
        <ModalOverlay showModal={show}>
          <ModalDialog>
            <ModalBody ref={modalBodyRef}>{children}</ModalBody>
          </ModalDialog>
        </ModalOverlay>,
        document.getElementById("modal-overlay-root") as HTMLElement
      )}
    </>
  );
};

export default Modal;
