import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Helmet } from 'react-helmet';

export default function Contacts() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <Helmet>
        <title>Your contacts</title>
      </Helmet>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}

// <h1>Phonebook</h1>
// <ContactForm />
// <h2>Contacts</h2>
// <Filter />
// {isLoading && !error && <b>Request in progress...</b>}
// {error && (
//   <div style={{ margin: '10px auto' }}>
//     Something went wrong... Try reloading the page
//   </div>
// )}
// {contacts.length > 0 && <ContactList />}
