import React, { createContext, useState } from "react";

interface IFormContext {
	fields: any;
	onSetField: (fieldName: string, value: any) => void;
	setField: (fields: any) => void;
}

export const FormContext = createContext<IFormContext>({
	fields: {},
	onSetField: () => {
		//
	},
	setField: () => {
		//
	},
});

const FormProvider: React.FC = ({ children }) => {
	const [fields, setFields] = useState({ fields: {} });

	function onSetField(fieldName: string, value: any) {
		setFields((prevState) => {
			return {
				fields: {
					...prevState.fields,
					[fieldName]: value,
				},
			};
		});
	}

	function setField(values: any) {
		setFields({ fields: values });
	}

	return (
		<FormContext.Provider value={{ fields, onSetField, setField }}>
			{children}
		</FormContext.Provider>
	);
};

export default FormProvider;
