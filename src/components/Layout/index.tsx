import { Navbar } from "components";
import React from "react";
import { ContainerWrapper } from "./Layout.style";

interface LayoutProps {}
interface ContainerProps extends React.HTMLProps<HTMLDivElement> {}

const Layout: React.FC<LayoutProps> = ({ children }) => {
	return (
		<div>
			<Navbar />
			<main>{children}</main>
		</div>
	);
};

export const Container: React.FC<ContainerProps> = ({ children }) => {
	return <ContainerWrapper>{children}</ContainerWrapper>;
};

export default Layout;
