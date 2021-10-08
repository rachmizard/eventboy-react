import React from "react";
import { GapProps } from "./Gap.interface";
import { GapHeight } from "./Gap.style";

const Gap: React.FC<GapProps> = ({ height, width }) => {
    return <GapHeight height={height} width={width} />;
};

export default Gap;
