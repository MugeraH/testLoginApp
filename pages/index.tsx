import type { NextPage } from "next";
import Head from "next/head";

import {
  Container,
  Box,
  CssBaseline,
  Avatar,
  Typography,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  Fade,
} from "@mui/material";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import React, { ChangeEvent } from "react";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const router = useRouter();
  const [userDetails, setUserDeatails] = React.useState({
    email: "",
    password: "",
  });

  const [error, setError] = React.useState(false);

  const onChange = (e: ChangeEvent<HTMLInputElement>) =>
    setUserDeatails({
      ...userDetails,
      [e.currentTarget.id]: e.currentTarget.value,
    });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (
      userDetails.email == "test@gmail.com" &&
      userDetails.password == "Password@12345"
    ) {
      router.push("/welcomePage");
    } else {
      setError(true);
    }
  };
  return (
    <>
      <Head>
        <title>TestLogin</title>
      </Head>
      <Box pt={5}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "#1976D2" }}>
              <AcUnitIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                onChange={onChange}
                name="email"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                onChange={onChange}
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                name="login"
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>

              <Fade in={error}>
                <Typography
                  variant="subtitle1"
                  textAlign="center"
                  my={2}
                  color="error"
                >
                  Invalid email or password
                </Typography>
              </Fade>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Home;
