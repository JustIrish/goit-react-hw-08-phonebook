import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/operations';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Helmet } from 'react-helmet';
import { Skeleton, Box, Typography } from '@mui/material';
import {
  selectIsLoading,
  selectError,
  selectContacts,
} from 'redux/contacts/selectors';

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
            <Typography sx={{ m: '32px auto' }} variant="h6" component="div">
              Something went wrong...Try reloading the page
            </Typography>
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
