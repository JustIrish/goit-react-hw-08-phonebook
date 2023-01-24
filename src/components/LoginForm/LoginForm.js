import { TextField, Grid, Box, Typography, Container } from '@mui/material/';
import { LoadingButton } from '@mui/lab';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import { logIn } from 'redux/auth/operations';
import { useAuth } from 'hooks';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const { authIsLoading } = useAuth();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    )
      .unwrap()
      .then(() => toast.success('You have successfully logged in'))
      .catch(() =>
        toast.error(
          'Something went wrong...Try reloading the page and enter valid email, password'
        )
      );
    form.reset();
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5" mb={2}>
          Log in
        </Typography>
        <form onSubmit={handleSubmit} autoComplete="off">
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <TextField
                type="email"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
              />
            </Grid>
          </Grid>
          <LoadingButton
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            loading={authIsLoading}
          >
            Log in
          </LoadingButton>
        </form>
      </Box>
    </Container>
  );
};
