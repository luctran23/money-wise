import React, { ChangeEvent, FormEvent, useState } from "react";
import styled from "styled-components";

const LoginWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

const Form = styled.form`
    background-color: #fff;
    border-radius: 5px;
    padding: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    width: 30%;
`;

const Heading = styled.h2`
    text-align: center;
    margin-bottom: 20px;
`;

const FormGroup = styled.div`
    margin-bottom: 20px;
    width: 100%;
`;

const Label = styled.label`
    display: block;
    margin-bottom: 5px;
`;

const Input = styled.input`
    width: calc(100% - 20px);
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 5px;
`;

const Button = styled.button`
    display: block;
    width: 100%;
    padding: 10px;
    font-size: 16px;
    background-color: #c130b3;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        background-color: #db83d2;
    }
`;

export const LoginView = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Here you can add your login logic, such as sending a request to a server or verifying the user's credentials
        console.log(`Username: ${username} Password: ${password}`);
    };

    const onUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
    };

    const onPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    return (
        <LoginWrapper>
            <Form onSubmit={handleSubmit}>
                <Heading>Login</Heading>
                <FormGroup>
                    <Label htmlFor="username">Username:</Label>
                    <Input
                        type="text"
                        id="username"
                        value={username}
                        onChange={onUsernameChange}
                    />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="password">Password:</Label>
                    <Input
                        type="password"
                        id="password"
                        value={password}
                        onChange={onPasswordChange}
                    />
                </FormGroup>
                <Button type="submit">Login</Button>
            </Form>
        </LoginWrapper>
    );
};
