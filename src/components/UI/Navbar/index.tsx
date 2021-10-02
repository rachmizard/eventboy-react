import { Container, Modal, ToggleDarkMode } from "components";
import { LoginContainer } from "containers";
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
  const [showModal, setShowModal] = useState<boolean>(false);

  const [collapse, setCollapse] = useState<boolean>();

  function onToggleCollapseHandler() {
    setCollapse((prevState) => {
      return !prevState;
    });
  }

  function onToggleModal() {
    setShowModal((prevState) => !prevState);
  }

  function dismissModal() {
    setShowModal(false);
  }

  return (
    <Container>
      <Modal show={showModal} onDismissModal={dismissModal}>
        <LoginContainer dismissModal={dismissModal} />
      </Modal>
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
          <NavItem>
            <NavLink to="#" onClick={onToggleModal}>
              Login
            </NavLink>
          </NavItem>
        </NavLinks>
        <CollapseDropDown onClick={onToggleCollapseHandler}>
          {collapse ? <IoIosClose size={30} /> : <IoIosMenu size={30} />}
        </CollapseDropDown>
      </NavbarWrapper>
    </Container>
  );
}
