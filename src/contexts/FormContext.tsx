import { FormikErrors, FormikTouched, useFormik } from "formik";
import React, { createContext, useState } from "react";
import { AnySchema, object } from "yup";

interface IFormContext {
	values: any;
	errors: FormikErrors<{} | any>;
	touched: FormikTouched<{} | any>;
	setValues: (values: any) => void;
	handleChange: (e: React.ChangeEvent<any>) => void;
	handleSubmit: (e?: React.FormEvent<HTMLFormElement> | undefined) => void;
	handleBlur: (e: React.FocusEvent<any>) => void;
	validationSchema: (schema: AnySchema) => void;
}

export const FormContext = createContext<IFormContext>({
	values: {},
	errors: {},
	touched: {},
	setValues: () => {},
	handleChange: () => {},
	handleSubmit: () => {},
	handleBlur: () => {},
	validationSchema: () => {},
});

const FormProvider: React.FC = ({ children }) => {
	const [schemaValidation, setSchemaValidation] = useState<AnySchema>(
		object({})
	);

	const {
		values,
		setValues,
		handleChange,
		handleBlur,
		handleSubmit,
		errors,
		touched,
	} = useFormik({
		initialValues: {},
		validationSchema: schemaValidation,
		onSubmit: (output) => {
			alert(JSON.stringify(output));
		},
	});

	function validationSchema(schema: AnySchema | any) {
		setSchemaValidation(schema);
	}

	return (
		<FormContext.Provider
			value={{
				values,
				errors,
				touched,
				setValues,
				handleChange,
				handleSubmit,
				handleBlur,
				validationSchema,
			}}>
			{children}
		</FormContext.Provider>
	);
};

export default FormProvider;
