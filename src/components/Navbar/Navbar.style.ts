import styled from "styled-components";

export const NavbarWrapper = styled.nav`
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 6em;
`;

export const NavLinks = styled.ul`
	list-style: none;
	li {
		display: inline-block;
		padding-right: 47px;
		a {
			display: inline-flex;
			align-items: center;
			text-decoration: none;
			color: ${(props) => props.theme.textTertiary};
			font-weight: 600;

			> img {
				height: 20px;
			}

			> .cart-text {
				margin-left: 18px;
			}
		}
	}
`;

export const NavLogo = styled.h1`
	font-size: 30px;
	font-weight: bold;

	a {
		text-decoration: none;
		color: ${(props) => props.theme.textPrimary};
	}
`;
