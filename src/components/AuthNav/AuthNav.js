import { Box, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { styledNavLink } from '../common/StyledNavLink';

export const AuthNav = () => {
  return (
    <Box display="flex" gap={2}>
      <Typography
        variant="h6"
        component={NavLink}
        to="/register"
        sx={styledNavLink}
      >
        Register
      </Typography>

      <Typography
        variant="h6"
        component={NavLink}
        to="/login"
        sx={styledNavLink}
      >
        Log in
      </Typography>
    </Box>
  );
};
