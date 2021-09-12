import React from "react";
import { DividerProps } from "./Divider.interface";
import { LineHorizontal, LineVertical } from "./Divider.style";

const Divider: React.FC<DividerProps> = ({ dividerSize, position }) => {
	if (position === "horizontal") {
		return <LineHorizontal dividerSize={dividerSize} />;
	}

	if (position === "vertical") {
		return <LineVertical dividerSize={dividerSize} />;
	}

	return <LineHorizontal dividerSize={dividerSize} />;
};

export default Divider;
