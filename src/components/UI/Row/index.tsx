import styled, { CSSProp } from "styled-components";
import { device } from "utils/theme";

interface RowProps {
    display?: string;
    direction?: "row" | "row-reverse" | "column" | "column-reverse";
    gap?: number | string;
    alignItems?: "flex-start" | "flex-end" | "center" | "stretch" | "baseline";
    alignSelf?: "flex-start" | "flex-end" | "center" | "stretch" | "baseline";
    justify?:
        | "center"
        | "end"
        | "space-between"
        | "space-around"
        | "space-evenly"
        | "baseline"
        | "flex-start"
        | "flex-end";
    style?: CSSProp;
}

interface ColProps {
    colSize?: number;
    alignItems?: "flex-start" | "flex-end" | "center" | "stretch" | "baseline";
    alignSelf?: "flex-start" | "flex-end" | "center" | "stretch" | "baseline";
}

export const Row = styled.div<RowProps>`
    display: flex;
    flex-direction: ${(props) =>
        props.direction === "column" ? "row" : "column"};
    gap: ${(props) => props.gap}px;
    justify-content: ${(props) => props.justify};

    @media ${device.laptopL} {
        flex-direction: ${(props) =>
            props.direction === "row" ? "column" : "row"};
        align-items: ${(props) => props.alignItems};
        gap: ${(props) => props.gap}px;
        justify-content: ${(props) => props.justify};
    }
`;

export const Col = styled.div<ColProps>`
    flex: ${(props) => props.colSize};
    align-items: ${(props) => props.alignItems};
    align-self: ${(props) => props.alignSelf};
`;

Row.defaultProps = {
    display: "flex",
    gap: "10px",
    alignItems: "flex-start",
};
