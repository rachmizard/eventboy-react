import { Hamburger, ShoppingCart, Cross } from "assets";
import { Container, ToggleDarkMode } from "components";
import { useDarkMode } from "hooks";
import { useState } from "react";
import {
	NavbarWrapper,
	NavItem,
	NavLink,
	NavLinks,
	NavLogo,
	CollapseDropDown,
} from "./Navbar.style";

export default function Navbar() {
	const { theme, toggleThemeHandler } = useDarkMode();

	const [iconCollapse, setIconCollapse] = useState(Hamburger);

	function onToggleCollapseHandler() {
		setIconCollapse((prevState) => {
			if (prevState === Hamburger) {
				return Cross;
			}

			return Hamburger;
		});
	}

	return (
		<Container>
			<NavbarWrapper>
				<NavLogo to="/">EventBoy</NavLogo>
				<NavLinks>
					<NavItem>
						<NavLink to="/cart">
							<img src={ShoppingCart} alt="Icon Cart" className="cart-icon" />
							<span className="cart-text">$0.00</span>
						</NavLink>
					</NavItem>
					<NavItem>
						<ToggleDarkMode onClick={toggleThemeHandler} darkMode={theme} />
					</NavItem>
				</NavLinks>
				<CollapseDropDown onClick={onToggleCollapseHandler}>
					<img src={iconCollapse} width="32" height="32" alt="Icon Hamburger" />
				</CollapseDropDown>
			</NavbarWrapper>
		</Container>
	);
}
