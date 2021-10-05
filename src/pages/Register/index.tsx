import { Hero } from "assets";
import {
    Button,
    Container,
    Form,
    Gap,
    Heading,
    Input,
    Text,
    Toast,
} from "components";
import { useFormik } from "formik";
import { useAppDispatch } from "hooks";
import React, { useState } from "react";
import { RouteComponentProps } from "react-router";
import { signUpAsyncThunk } from "store/auth";
import { RegisterSchemaValidator } from "utils/validator";
import { RegisterForm, RegisterWrapper } from "./Register.style";

const Register: React.FC<RouteComponentProps> = ({ history }) => {
    const dispatch = useAppDispatch();
    const [loading, setLoading] = useState<boolean>(false);
    const [showError, setShowError] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string>("");

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: "",
        },
        validationSchema: RegisterSchemaValidator,
        onSubmit: (values) => {
            onSubmitRegisterHandler(values);
        },
    });

    const onCloseToastHandler = () => {
        setShowError(false);
        setErrorMessage("");
    };

    function onSubmitRegisterHandler(values: any) {
        setLoading(true);
        dispatch(signUpAsyncThunk(values))
            .unwrap()
            .then(() => {
                setLoading(false);
                history.replace("/");
            })
            .catch((error) => {
                setLoading(false);
                setShowError(true);
                setErrorMessage(error.errorMessage);
            });
    }

    return (
        <>
            <Container>
                <Gap height={95} />
                <RegisterWrapper>
                    <div>
                        <img src={Hero} alt="Register Banners" />
                    </div>
                    <RegisterForm>
                        <div>
                            <Heading className="heading-register">
                                Make an{" "}
                                <span className="highlight">Account!</span>
                            </Heading>
                            <Gap height={24} />
                            <Text>
                                Buy ticket concert anytime and anywhere !
                            </Text>
                        </div>
                        <Form onSubmit={formik.handleSubmit}>
                            <Form.Group>
                                <Input
                                    id="name"
                                    name="name"
                                    label="Username"
                                    placeholder="Your name.."
                                    autoComplete="off"
                                    value={formik.values.name}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    hasError={
                                        formik.touched.name &&
                                        formik.errors.name
                                            ? true
                                            : false
                                    }
                                    errorMessage={formik.errors.name}
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
                                        formik.touched.email &&
                                        formik.errors.email
                                            ? true
                                            : false
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
                                        formik.touched.password &&
                                        formik.errors.password
                                            ? true
                                            : false
                                    }
                                    errorMessage={formik.errors.password}
                                />
                            </Form.Group>
                            <Form.Group>
                                {loading ? (
                                    <small>Sign Up...</small>
                                ) : (
                                    <Button
                                        type="submit"
                                        variant="primary"
                                        buttonSize="md">
                                        Sign Up
                                    </Button>
                                )}
                            </Form.Group>
                        </Form>
                    </RegisterForm>
                </RegisterWrapper>
            </Container>
            <Toast
                mode="warning"
                show={showError}
                onCloseToast={onCloseToastHandler}
                title="An error occured!">
                {errorMessage}
            </Toast>
        </>
    );
};

export default Register;
