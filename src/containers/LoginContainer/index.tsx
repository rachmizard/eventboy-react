import { Button, Form, Heading, Input } from "components";
import { useFormik } from "formik";
import React from "react";
import { IoIosClose } from "react-icons/io";
import { useHistory } from "react-router";
import { LoginSchemaValidator } from "utils/validator";
import { LoginContainerProps } from "./LoginContainer.interface";
import {
	FormLink,
	LoginBody,
	LoginHeader,
	LoginWrapper,
} from "./LoginContainer.style";

const LoginContainer: React.FC<LoginContainerProps> = ({ dismissModal }) => {
	const history = useHistory();

	const formik = useFormik({
		initialValues: {
			email: "",
			password: "",
		},
		validationSchema: LoginSchemaValidator,
		onSubmit: (values) => {
			formik.resetForm({ values: { email: "", password: "" } });
		},
	});

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
				<Form onSubmit={formik.handleSubmit}>
					<Form.Group>
						<Input
							id="email"
							label="Email"
							placeholder="ex: zyan@gmail.com"
							value={formik.values.email}
							autoComplete="off"
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							hasError={
								formik.touched.email && formik.errors.email ? true : false
							}
							errorMessage={formik.errors.email}
						/>
					</Form.Group>
					<Form.Group>
						<Input
							id="password"
							label="Password"
							placeholder="Password"
							type="password"
							autoComplete="current-password"
							value={formik.values.password}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							hasError={
								formik.touched.password && formik.errors.password ? true : false
							}
							errorMessage={formik.errors.password}
						/>
					</Form.Group>
					<div className="forgot-password">
						<FormLink to="/forgot-password">Forgot Password ?</FormLink>
					</div>
					<Form.Group>
						<Button type="submit" variant="primary" buttonSize="md">
							Sign In
						</Button>
					</Form.Group>
				</Form>
			</LoginBody>
		</LoginWrapper>
	);
};

export default LoginContainer;
