import React, { HTMLProps } from "react";
import { LinkProps } from "react-router-dom";

export interface DropdownProps extends HTMLProps<HTMLDivElement> {
    children?: React.ReactNode;
    titleName?: string;
}

export interface DropdownComposition {
    Menu: React.FC<MenuProps>;
}

export interface MenuProps extends LinkProps {
    title?: string;
    to: string;
}
