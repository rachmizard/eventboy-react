import { Button, Form, Heading, Input } from "components";
import { useModal } from "hooks";
import React from "react";
import { IoIosClose } from "react-icons/io";
import { useHistory } from "react-router";
import {
	FormLink,
	LoginBody,
	LoginHeader,
	LoginWrapper,
} from "./LoginContainer.style";

const LoginContainer: React.FC = () => {
	const { dismissModal } = useModal();
	const history = useHistory();

	function navigateToRegister() {
		dismissModal();
		history.push("/register");
	}

	return (
		<LoginWrapper>
			<LoginHeader>
				<IoIosClose onClick={dismissModal} size={30} cursor="pointer" />
			</LoginHeader>
			<LoginBody>
				<div className="row-header-title">
					<Heading size="md">Sign in</Heading>
					<FormLink to="#" onClick={navigateToRegister}>
						Didn't have an account?
					</FormLink>
				</div>
				<Form>
					<Form.Group>
						<Input id="email" label="Email" placeholder="ex: zyan@gmail.com" />
					</Form.Group>
					<Form.Group>
						<Input
							id="password"
							label="Password"
							placeholder="Password"
							type="password"
						/>
					</Form.Group>
					<div className="forgot-password">
						<FormLink to="/forgot-password">Forgot Password ?</FormLink>
					</div>
					<Form.Group>
						<Button variant="primary" buttonSize="md">
							Sign In
						</Button>
					</Form.Group>
				</Form>
			</LoginBody>
		</LoginWrapper>
	);
};

export default LoginContainer;
