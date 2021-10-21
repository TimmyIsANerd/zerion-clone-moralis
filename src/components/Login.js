import React, { useState } from "react";
import { useMoralis } from "react-moralis";
import { Container, Button, Box, Stack, Center, Form, Input} from '@chakra-ui/react';

const AuthenticateViaMetaMask = () =>{
    const { authenticate, isAuthenticated, user} = useMoralis();

    if(!isAuthenticated){
        return(
            <Stack spacing={6}>
                <Container mt={5}>
                    <Center>
                        <Button onClick={()=> authenticate()}>Authenticate</Button>
                    </Center>
                </Container>
            </Stack>
        )
    }

    return (
        <Box>
            <h1>Welcome {user.username}</h1>
        </Box>
    )
}

const Login = () =>{
    const { login } = useMoralis();

    const [username,setUsername] = useState();
    const [password,setPassword] = useState();

    return(
        <Box>
            <Container>
                <Form onSubmit={()=>login(username,password)}>
                    <Input type="username" name="username" value={username} placeholder="Username" required />
                    <Input type="password" name="password" value={password} placeholder="Password" required />
                    <Button type="submit">Login</Button>
                </Form>
            </Container>
        </Box>
    )
}

const SignUp = () =>{
    const { signup } = useMoralis();

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    return(
        <Box>
            <Container>
                <Form onSubmit={()=>signup(email,password)}>
                    <Input type="email" name="email" value={email} placeholder="Email Address" required />
                    <Input type="password" name="password" value={password} placeholder="Password" required />
                </Form>
            </Container>
        </Box>
    )
}

const Auth = {AuthenticateViaMetaMask, Login, SignUp};

export default Auth