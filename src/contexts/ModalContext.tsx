import { createContext, useState } from "react";

interface IModalContext {
	show: boolean;
	onToggleModal: () => void;
	dismissModal: () => void;
}

export const ModalContext = createContext<IModalContext>({
	show: false,
	onToggleModal: () => {},
	dismissModal: () => {},
});

const ModalProvider: React.FC = ({ children }) => {
	const [show, setShow] = useState<boolean>(false);

	function onToggleModal() {
		setShow((prevState) => !prevState);
	}

	function dismissModal() {
		setShow(false);
	}

	const context = {
		show,
		onToggleModal,
		dismissModal,
	};

	return (
		<ModalContext.Provider value={context}>{children}</ModalContext.Provider>
	);
};

export default ModalProvider;
