import { Hero } from "assets";
import { Button, Container, Form, Gap, Heading, Input, Text } from "components";
import { useFormik } from "formik";
import React from "react";
import { RegisterSchemaValidator } from "utils/validator";
import { RegisterForm, RegisterWrapper } from "./Register.style";

const Register: React.FC = () => {
	const formik = useFormik({
		initialValues: {
			username: "",
			email: "",
			password: "",
		},
		validationSchema: RegisterSchemaValidator,
		onSubmit: (values) => {
			alert(JSON.stringify(values));
		},
	});

	return (
		<Container>
			<Gap height={95} />
			<RegisterWrapper>
				<div>
					<img src={Hero} alt="Register Banners" />
				</div>
				<RegisterForm>
					<div>
						<Heading className="heading-register">
							Make an <span className="highlight">Account!</span>
						</Heading>
						<Gap height={24} />
						<Text>Buy ticket concert anytime and anywhere !</Text>
					</div>
					<Form onSubmit={formik.handleSubmit}>
						<Form.Group>
							<Input
								id="username"
								name="username"
								label="Username"
								placeholder="Your username.."
								autoComplete="off"
								value={formik.values.username}
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								hasError={
									formik.touched.username && formik.errors.username
										? true
										: false
								}
								errorMessage={formik.errors.username}
							/>
						</Form.Group>
						<Form.Group>
							<Input
								id="email"
								name="email"
								label="Email"
								type="email"
								placeholder="Your email, ex: abc@gmail.com"
								autoComplete="current-email"
								value={formik.values.email}
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
								name="password"
								label="Password"
								type="password"
								placeholder="Your password.."
								autoComplete="current-password"
								value={formik.values.password}
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								hasError={
									formik.touched.password && formik.errors.password
										? true
										: false
								}
								errorMessage={formik.errors.password}
							/>
						</Form.Group>
						<Form.Group>
							<Button type="submit" variant="primary" buttonSize="md">
								Sign Up
							</Button>
						</Form.Group>
					</Form>
				</RegisterForm>
			</RegisterWrapper>
		</Container>
	);
};

export default Register;
