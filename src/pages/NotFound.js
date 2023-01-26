import { Box, Container } from '@mui/material';

export const NotFound = () => {
  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <img
          src="https://t3.ftcdn.net/jpg/04/48/35/42/360_F_448354204_33yPB12jtqzD31robpa85NoPctJ2thRd.jpg"
          alt="404 not found "
        />
      </Box>
    </Container>
  );
};
