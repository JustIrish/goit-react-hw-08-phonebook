import { Box, Typography, IconButton } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import { useAuth } from 'hooks';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const handleLogOut = () => dispatch(logOut());

  return (
    <Box sx={{ display: 'flex', gap: 4, alignItems: 'center' }}>
      <Typography
        variant="h6"
        component="p"
        sx={{ display: { xs: 'none', md: 'inline-block' } }}
      >
        Welcome, {user.name}!
      </Typography>
      <IconButton
        sx={{
          color: 'inherit',
          display: { xs: 'flex' },
        }}
        onClick={handleLogOut}
      >
        <LogoutIcon />
      </IconButton>
    </Box>
  );
};
