import React from "react";
import { BaseButton, ButtonPrimary, ButtonSecondary } from "./Button.style";
import { ButtonProps } from "./Button.interface";

const Button: React.FC<ButtonProps> = ({
    children,
    variant,
    buttonSize,
    type,
    loading,
    ...props
}) => {
    if (variant === "primary") {
        return (
            <ButtonPrimary
                buttonSize={buttonSize}
                type={type}
                onClick={props.onClick}
                loading={loading}
                style={props.style}>
                {children}
            </ButtonPrimary>
        );
    }

    if (variant === "secondary") {
        return (
            <ButtonSecondary
                buttonSize={buttonSize}
                type={type}
                onClick={props.onClick}
                loading={loading}
                style={props.style}>
                {children}
            </ButtonSecondary>
        );
    }

    return (
        <BaseButton
            loading={loading}
            buttonSize={buttonSize}
            type={type}
            onClick={props.onClick}
            style={props.style}>
            {children}
        </BaseButton>
    );
};

Button.defaultProps = {
    variant: "primary",
    buttonSize: "md",
};

export default Button;
