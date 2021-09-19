import { Hero } from "assets";
import { Button, Container, Form, Gap, Heading, Input, Text } from "components";
import { useForm } from "hooks";
import React from "react";
import { RegisterSchemaValidator } from "utils/validator";
import { RegisterWrapper, RegisterForm } from "./Register.style";

const Register: React.FC = () => {
	const form = useForm(
		{
			username: "",
			email: "",
			password: "",
		},
		RegisterSchemaValidator
	);

	function submitHandler(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		form.handleSubmit(e);
	}

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
					<Form onSubmit={submitHandler}>
						<Form.Group>
							<Input
								name="username"
								label="Username"
								placeholder="Your username.."
								autoComplete="off"
								value={form.values?.username || ""}
							/>
						</Form.Group>
						<Form.Group>
							<Input
								name="email"
								label="Email"
								type="email"
								placeholder="Your email, ex: abc@gmail.com"
								autoComplete="current-email"
								value={form.values?.email || ""}
							/>
						</Form.Group>
						<Form.Group>
							<Input
								name="password"
								label="Password"
								type="password"
								placeholder="Your password.."
								autoComplete="current-password"
								value={form.values?.password || ""}
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
