import { Container, Dropdown, Modal, ToggleDarkMode } from "components";
import { LoginContainer } from "containers";
import { useAppDispatch, useAppSelector, useDarkMode } from "hooks";
import { useState } from "react";
import { IoIosCart, IoIosClose, IoIosLogIn, IoIosMenu } from "react-icons/io";
import { setLoggedOut } from "store/auth";
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
    const dispatch = useAppDispatch();
    const auth = useAppSelector((state) => state.auth);

    const [collapse, setCollapse] = useState<boolean>();

    function onToggleCollapseHandler() {
        setCollapse((prevState) => {
            return !prevState;
        });
    }

    function onToggleModal() {
        setShowModal((prevState) => !prevState);
    }

    function onLogoutHandler() {
        dispatch(setLoggedOut());
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
                        <ToggleDarkMode
                            onClick={toggleThemeHandler}
                            darkMode={theme}
                        />
                    </NavItem>
                    <NavItem>
                        {!auth.isLoggedIn ? (
                            <NavLink to="#" onClick={onToggleModal}>
                                <IoIosLogIn
                                    size={24}
                                    style={{ marginRight: "8px" }}
                                />{" "}
                                Login
                            </NavLink>
                        ) : (
                            <>
                                <Dropdown titleName={auth.user?.name}>
                                    <Dropdown.Menu
                                        to="/order-history"
                                        title="Order History"
                                    />
                                    <Dropdown.Menu
                                        to="#"
                                        title="Logout"
                                        onClick={onLogoutHandler}
                                    />
                                </Dropdown>
                            </>
                        )}
                    </NavItem>
                </NavLinks>
                <CollapseDropDown onClick={onToggleCollapseHandler}>
                    {collapse ? (
                        <IoIosClose size={30} />
                    ) : (
                        <IoIosMenu size={30} />
                    )}
                </CollapseDropDown>
            </NavbarWrapper>
        </Container>
    );
}
