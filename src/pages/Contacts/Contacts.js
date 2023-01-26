import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Helmet } from 'react-helmet';
import { Skeleton, Box } from '@mui/material';
// import { Typography } from '@mui/material';
import { selectIsLoading, selectError, selectContacts } from 'redux/selectors';

export default function Contacts() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Your contacts</title>
      </Helmet>
      {isLoading ? (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 4,
            alignItems: 'center',
            marginTop: '60px',
          }}
        >
          <Skeleton variant="rounded" width={400} height={60} />
          <Skeleton variant="rounded" width={400} height={60} />
          <Skeleton variant="rounded" width={400} height={40} />
          <Skeleton variant="rounded" width={700} height={60} />
          <Skeleton variant="rounded" width={700} height={60} />
          <Skeleton variant="rounded" width={700} height={60} />
          <Skeleton variant="rounded" width={700} height={60} />
        </Box>
      ) : (
        <>
          <ContactForm />
          <Filter />
          {error && (
            <div style={{ margin: '10px auto' }}>
              Something went wrong... Try reloading the page
            </div>
          )}
          {contacts.length > 0 ? (
            <ContactList />
          ) : (
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 4,
                alignItems: 'center',
              }}
            >
              <Skeleton variant="rounded" width={700} height={60} />
              <Skeleton variant="rounded" width={700} height={60} />
              <Skeleton variant="rounded" width={700} height={60} />
            </Box>
          )}
          ;
        </>
      )}
    </>
  );
}
