/* eslint-disable react-hooks/exhaustive-deps */
import { FormContext } from "contexts/FormContext";
import { useContext, useEffect } from "react";

function useForm(fields?: any) {
	const formContext = useContext(FormContext);

	const setFields = (values: any) => {
		formContext.setField(values);
	};

	useEffect(() => {
		if (fields) {
			setFields(fields);
		}
	}, []);

	return {
		fields: formContext.fields,
		onSetField: formContext.onSetField,
	};
}

export default useForm;
