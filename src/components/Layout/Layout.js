import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Suspense } from 'react';
import { Box } from '@mui/material';
import { RotatingLines } from 'react-loader-spinner';
import { AppHeader } from 'components/AppHeader/AppHeader';
import { GlobalStyle } from 'components/GlobalStyle';

export const Layout = () => {
  return (
    <div>
      <AppHeader />
      <Suspense
        fallback={
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              marginTop: '60px',
            }}
          >
            <RotatingLines
              strokeColor="grey"
              strokeWidth="5"
              animationDuration="0.75"
              width="96"
              visible={true}
            />
          </Box>
        }
      >
        <Outlet />
      </Suspense>
      <GlobalStyle />
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};
