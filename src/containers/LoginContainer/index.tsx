import React from "react";
import {
	LoginBody,
	LoginHeader,
	LoginWrapper,
	FormLink,
	FormWrapper,
	FormGroup,
	Label,
	Input,
} from "./LoginContainer.style";
import { IoIosClose } from "react-icons/io";
import { useModal } from "hooks";
import { Button, Heading } from "components";
import { useHistory } from "react-router";

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
				<FormWrapper>
					<FormGroup>
						<Label htmlFor="email">Email</Label>
						<Input id="email" placeholder="ex: zyan@gmail.com" />
					</FormGroup>
					<FormGroup>
						<Label htmlFor="password">Password</Label>
						<Input id="password" placeholder="Password" type="password" />
					</FormGroup>
					<div className="forgot-password">
						<FormLink to="/forgot-password">Forgot Password ?</FormLink>
					</div>
					<FormGroup>
						<Button variant="primary" buttonSize="md">
							Sign In
						</Button>
					</FormGroup>
				</FormWrapper>
			</LoginBody>
		</LoginWrapper>
	);
};

export default LoginContainer;
