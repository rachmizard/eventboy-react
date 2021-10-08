import { Link } from "react-router-dom";
import styled from "styled-components";

export const DropdownWrapper = styled.div`
    position: relative;

    :focus-within > .dropdown-menu {
        visibility: visible;
        opacity: 1;
        transition: all 0.25s;
        transform: translateY(20px);
    }

    > .dropdown-btn {
        background: none;
        border: none;
        font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont,
            "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans",
            "Droid Sans", "Helvetica Neue", sans-serif;
        display: inline-flex;
        align-items: center;
        font-weight: 600;
        font-size: 16px;
        color: ${(props) => props.theme.textTertiary};
        cursor: pointer;
    }

    > .dropdown-menu {
        transition: all 0.25s;
        transform: translateY(0px);
        visibility: hidden;
        opacity: 0;
        position: absolute;
        top: 10px;
        right: 0;
        border-radius: 10px;
        box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
        width: 180px;
        display: flex;
        flex-direction: column;
        gap: 14px;
        background: ${(props) => props.theme.body};
        padding: 20px;
    }
`;

export const DropdownLink = styled(Link)`
    text-decoration: none;
    color: ${(props) => props.theme.textTertiary};

    :hover {
        color: ${(props) => props.theme.textPurple};
    }
`;
