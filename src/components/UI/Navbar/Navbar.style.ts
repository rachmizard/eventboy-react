import { Link } from "react-router-dom";
import styled from "styled-components";
import { device } from "utils/theme";

export const NavbarWrapper = styled.nav`
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 6em;
	width: 100%;
`;

export const NavLinks = styled.ul`
	display: none;
	flex-direction: column;
	list-style: none;

	@media ${device.tablet} {
		display: inline-flex;
		flex-direction: row;
		align-items: center;
	}
`;

export const NavItem = styled.li`
	display: inline-block;
	padding-right: 47px;
`;

export const NavLink = styled(Link)`
	display: inline-flex;
	align-items: center;
	text-decoration: none;
	color: ${(props) => props.theme.textTertiary};
	font-weight: 600;

	> span {
		margin-left: 13px;
	}
`;

export const NavLogo = styled(Link)`
	font-size: 30px;
	font-weight: bold;
	text-decoration: none;
	color: ${(props) => props.theme.textPrimary};
`;

export const CollapseDropDown = styled.button`
	display: inline-block;
	border: none;
	background: none;
	color: gray;

	@media ${device.tablet} {
		display: none;
	}
`;
