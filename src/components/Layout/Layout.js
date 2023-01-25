import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Suspense } from 'react';
import { AppHeader } from 'components/AppHeader/AppHeader';
import { GlobalStyle } from 'components/GlobalStyle';

export const Layout = () => {
  return (
    <div>
      <AppHeader />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <GlobalStyle />
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};
