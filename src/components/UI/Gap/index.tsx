import React from "react";
import { GapProps } from "./Gap.interface";
import { GapHeight } from "./Gap.style";

const Gap: React.FC<GapProps> = ({ height }) => {
	return <GapHeight height={height} />;
};

export default Gap;
