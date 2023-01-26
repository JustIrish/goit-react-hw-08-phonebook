import { Helmet } from 'react-helmet';
import { Box, Typography } from '@mui/material';

export default function Home() {
  return (
    <Box
      sx={{
        maxWidth: '800px',
        mx: 'auto',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        alignItems: 'center',
        justifyContent: 'center',
        height: '80vh',
      }}
    >
      <Helmet>
        <title>MyPnonebook</title>
      </Helmet>
      <Typography component="h1" variant="h4">
        Welcome to your Phonebook
      </Typography>
      <Typography component="p" variant="h6">
        This app will help you manage your contacts!
      </Typography>
    </Box>
  );
}
