import { Button, Box, Container, Typography } from "@mui/material";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

type Props = {};

function WelcomeLogin({}: Props) {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Welcomepage</title>
      </Head>
      <Box sx={{ margin: "300px auto", textAlign: "center" }}>
        <Container>
          <Typography variant="h4" my={3}>
            Welcome to TestLogin
          </Typography>

          <Typography my={3}>You have been succesfully logged in</Typography>

          <Button
            variant="contained"
            name="login"
            onClick={() => {
              router.push("/");
            }}
          >
            Click to logout
          </Button>
        </Container>
      </Box>
    </>
  );
}

export default WelcomeLogin;
