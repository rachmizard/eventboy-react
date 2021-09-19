import React from "react";

export interface FormComposition {
	Group: React.FC;
}

export interface FormProps extends React.HTMLProps<HTMLFormElement> {
	children: any;
}
