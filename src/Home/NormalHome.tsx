import React from "react";
import { TextInput, PasswordInput, Stack, Button, Container } from "@mantine/core";
import { notifications } from '@mantine/notifications'
import '@mantine/core/styles.css';
import { User } from '../Types/types';
import { useState } from "react";
import axios from "axios";
import { NavigateFunction, useNavigate } from "react-router-dom";

function onLoginButtonClick({username, password, setUser, navigate} : {username: string; password: string; setUser: React.Dispatch<React.SetStateAction<User>>; navigate: NavigateFunction}) {
  axios.get(`${process.env.REACT_APP_BACKEND_URL}/user/${username}`).then((response) => {
  }).catch((err) => {
  })
}

function NormalHome({setUser}: {setUser: React.Dispatch<React.SetStateAction<User>>}) {
  const [userInput, setUserInput] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  return (
    <>
      <Container size="sm">
        <Stack justify="center" gap="md">
          <TextInput />
          <PasswordInput />
          <Button onClick={() => onLoginButtonClick({username: userInput, password: password, setUser: setUser, navigate: navigate})}>
            Login
          </Button>
          <Button onClick={() => navigate('/register')} >
            Register
          </Button>
        </Stack>
      </Container>
    </>
  )
}

export default NormalHome;