import { TextField, Grid, Box, Typography, Container } from '@mui/material/';
import { LoadingButton } from '@mui/lab';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import { register } from 'redux/auth/operations';
import { useAuth } from 'hooks';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const { authIsLoading } = useAuth();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    )
      .unwrap()
      .then(() => toast.success('You have successfully registered'))
      .catch(() =>
        toast.error(
          'Something went wrong...Try reloading the page and enter data again'
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
          Register
        </Typography>

        <form onSubmit={handleSubmit} autoComplete="off">
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <TextField
                type="text"
                name="name"
                required
                fullWidth
                id="name"
                label="Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                type="email"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
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
            Register
          </LoadingButton>
        </form>
      </Box>
    </Container>
  );
};
