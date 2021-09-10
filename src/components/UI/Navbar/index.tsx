import { ShoppingCart } from "assets";
import { Container, ToggleDarkMode } from "components";
import { useDarkMode } from "hooks";
import { NavbarWrapper, NavLink, NavLinks, NavLogo } from "./Navbar.style";

export default function Navbar() {
	const { theme, toggleThemeHandler } = useDarkMode();

	return (
		<Container>
			<NavbarWrapper>
				<NavLogo to="/">EventBoy</NavLogo>
				<NavLinks>
					<li>
						<NavLink to="/cart">
							<img src={ShoppingCart} alt="Icon Cart" className="cart-icon" />
							<span className="cart-text">$0.00</span>
						</NavLink>
					</li>
					<li>
						<ToggleDarkMode onClick={toggleThemeHandler} darkMode={theme} />
					</li>
				</NavLinks>
			</NavbarWrapper>
		</Container>
	);
}
