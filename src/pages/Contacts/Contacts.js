import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Helmet } from 'react-helmet';
import { ContactsWrapper } from './Contacts.styled';
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
    <ContactsWrapper>
      <Helmet>
        <title>Your contacts</title>
      </Helmet>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {isLoading && !error && <b>Request in progress...</b>}
      {error && (
        <div style={{ margin: '10px auto' }}>
          Something went wrong... Try reloading the page
        </div>
      )}
      {contacts.length > 0 && <ContactList />}
    </ContactsWrapper>
  );
}
