import React from "react";
import { Button, Container, TextInput, PasswordInput, Stack } from "@mantine/core";
import '@mantine/core/styles.css';
import { useState } from "react";
import { notifications } from '@mantine/notifications'
import axios from "axios";
import { NavigateFunction, useNavigate } from "react-router-dom";

function handleRegister({username, password, checkPassword, navigate} : {username: string; password: string; checkPassword: string; navigate: NavigateFunction}) {
  axios.get(`${process.env.REACT_APP_BACKEND_URL}/user/${username}`).then((response) => {
    if (response.status === 200) {
      notifications.show({message: "Username Already Taken"});
    } 
  }).catch((err) => {
    try {
      if (err.response.status === 404) {
        if (password !== checkPassword) {
          notifications.show({message: "Password Inconsistent"});
        } else if (password.length < 8) {
          notifications.show({message: "Password too short"})
        } else {
          axios.post(`${process.env.REACT_APP_BACKEND_URL}/user/`, {
            username: username,
            password: password,
            roles: ["Member"],
            asset: 0
          }).then(() => {
            console.log(`Successfully Created User ${username}`)
            notifications.clean();
            navigate('/');
          }).catch((err) => {
            console.log(`POST failed with response ${err.response.status}`)
          })
        }
      }
    } catch {
      console.log(`POST failed with response ${err.response.status}`)
    }
  })
}

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");
  const navigate = useNavigate();

  return (
    <Container size="sm" >
      <Stack gap="md">
        <TextInput />
        <PasswordInput />
        <PasswordInput />
        <Button onClick={() => handleRegister({username: username, password: password, checkPassword:checkPassword, navigate: navigate})}>Register</Button>
      </Stack>
    </Container>
  )
}

export default Register;