import { ModalContext } from "contexts/ModalContext";
import { useContext } from "react";

export default function useModal() {
	const context = useContext(ModalContext);

	return {
		...context,
	};
}
