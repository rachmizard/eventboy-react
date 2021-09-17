import { Container, Form, Input } from "components";
import { useForm } from "hooks";
import React from "react";

const Register: React.FC = () => {
	const { fields } = useForm({
		username: "",
		email: "",
		password: "",
	});

	return (
		<Container>
			<Form>
				<Form.Group>
					<Input
						name="username"
						label="Username"
						placeholder="Your username.."
						value={fields?.username}
					/>
				</Form.Group>
				<Form.Group>
					<Input
						name="email"
						label="Email"
						type="email"
						placeholder="Your email, ex: abc@gmail.com"
						value={fields?.email}
					/>
				</Form.Group>
				<Form.Group>
					<Input
						name="password"
						label="Password"
						type="password"
						placeholder="Your password.."
						value={fields?.password}
					/>
				</Form.Group>
			</Form>
		</Container>
	);
};

export default Register;
