import { ShoppingCart } from "assets";
import { Container, ToggleDarkMode } from "components";
import { useDarkMode } from "hooks";
import { Link } from "react-router-dom";
import { NavbarWrapper, NavLinks, NavLogo } from "./Navbar.style";

export default function Navbar() {
	const { theme, toggleThemeHandler } = useDarkMode();

	return (
		<Container>
			<NavbarWrapper>
				<NavLogo>
					<Link to="/">EventBoy</Link>
				</NavLogo>
				<NavLinks>
					<li>
						<Link to="/cart">
							<img src={ShoppingCart} alt="Icon Cart" />
							<span className="cart-text">$0.00</span>
						</Link>
					</li>
					<li>
						<ToggleDarkMode onClick={toggleThemeHandler} darkMode={theme} />
					</li>
				</NavLinks>
			</NavbarWrapper>
		</Container>
	);
}
