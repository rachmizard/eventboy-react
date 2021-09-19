/* eslint-disable react-hooks/exhaustive-deps */
import { FormContext } from "contexts/FormContext";
import { useContext, useEffect } from "react";
import { AnySchema } from "yup";

function useForm(initialized?: any, schemaError?: AnySchema | any) {
	const {
		values,
		setValues,
		errors,
		touched,
		handleChange,
		handleSubmit,
		handleBlur,
		validationSchema,
	} = useContext(FormContext);

	useEffect(() => {
		validationSchema(schemaError);
		setValues(initialized);
	}, []);

	return {
		values,
		errors,
		touched,
		setValues,
		handleChange,
		handleSubmit,
		handleBlur,
	};
}

export default useForm;
