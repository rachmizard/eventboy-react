import React from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import {
    DropdownComposition,
    DropdownProps,
    MenuProps,
} from "./Dropdown.interface";
import { DropdownLink, DropdownWrapper } from "./Dropdown.style";

const Dropdown: React.FC<DropdownProps> & DropdownComposition = ({
    children,
    titleName,
}) => {
    return (
        <DropdownWrapper>
            <button type="button" className="dropdown-btn">
                {titleName}
                <IoMdArrowDropdown style={{ marginLeft: "8px" }} size={20} />
            </button>
            <div className="dropdown-menu">{children}</div>
        </DropdownWrapper>
    );
};

const Menu: React.FC<MenuProps> = ({ children, title, to, onClick }) => {
    return (
        <DropdownLink to={to} onClick={onClick}>
            {title || children}
        </DropdownLink>
    );
};

Dropdown.Menu = Menu;

export default Dropdown;
