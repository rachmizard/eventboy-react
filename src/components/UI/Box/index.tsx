import React, { HTMLProps } from "react";

const Box: React.FC<HTMLProps<HTMLDivElement>> = ({ children, ...props }) => {
    return <div {...props}> {children} </div>;
};

export default Box;
