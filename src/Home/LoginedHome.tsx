import React from "react";
import { Container, Text, Stack, Title, Button } from "@mantine/core";
import '@mantine/core/styles.css';
import { User } from '../Types/types'

function LoginedHome({user, setUser}: {user: User, setUser: React.Dispatch<React.SetStateAction<User>>}) {
  return (
    <Container size="sm">
      <Stack gap="md">
        <Title>Hello, {user.username}</Title>
        <Text size="md">Your current roles: {user.roles}</Text>
        <Text size="md">Your current asset: {user.asset}$</Text>
        <Button onClick={() => setUser({
          username: "",
          password: "",
          roles: [] as string[],
          asset: 0
        })}>Logout</Button>
      </Stack>
    </Container>
  )
}

export default LoginedHome;
