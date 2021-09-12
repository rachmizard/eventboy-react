import { Container, ToggleDarkMode } from "components";
import { useDarkMode } from "hooks";
import { useState } from "react";
import { IoIosCart, IoIosClose, IoIosMenu } from "react-icons/io";
import {
	CollapseDropDown,
	NavbarWrapper,
	NavItem,
	NavLink,
	NavLinks,
	NavLogo,
} from "./Navbar.style";

export default function Navbar() {
	const { theme, toggleThemeHandler } = useDarkMode();

	const [collapse, setCollapse] = useState<boolean>();

	function onToggleCollapseHandler() {
		setCollapse((prevState) => {
			return !prevState;
		});
	}

	return (
		<Container>
			<NavbarWrapper>
				<NavLogo to="/">EventBoy</NavLogo>
				<NavLinks>
					<NavItem>
						<NavLink to="/cart">
							<IoIosCart size={24} />
							<span className="cart-text">$0.00</span>
						</NavLink>
					</NavItem>
					<NavItem>
						<ToggleDarkMode onClick={toggleThemeHandler} darkMode={theme} />
					</NavItem>
				</NavLinks>
				<CollapseDropDown onClick={onToggleCollapseHandler}>
					{collapse ? <IoIosClose size={30} /> : <IoIosMenu size={30} />}
				</CollapseDropDown>
			</NavbarWrapper>
		</Container>
	);
}
