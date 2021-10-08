import styled from "styled-components";
import { GapProps } from "./Gap.interface";

export const GapHeight = styled.div<GapProps>`
    height: ${({ height }) => height}px;
    width: ${({ width }) => width}px;
`;
