import { Box, Typography } from '@mui/material';
import { Link, NavLink } from 'react-router-dom';
import { useAuth } from 'hooks';
import { styledNavLink } from '../common/StyledNavLink';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <Box sx={{ display: 'flex', gap: 4, alignItems: 'center' }}>
        <Typography
          component={Link}
          to="/"
          variant="h6"
          sx={{
            fontWeight: 600,
            color: 'inherit',
            display: { xs: 'none', md: 'block' },
          }}
        >
          Phonebook
        </Typography>
        {isLoggedIn && (
          <Typography
            variant="h6"
            component={NavLink}
            to="/contacts"
            sx={styledNavLink}
          >
            Contacts
          </Typography>
        )}
      </Box>
    </nav>
  );
};
