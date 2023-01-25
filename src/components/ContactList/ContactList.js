import { useSelector } from 'react-redux';
import { ContactListItem } from './ContactListItem';
import { selectVisibleContacts } from 'redux/selectors';
import { Box, List, Typography } from '@mui/material';

export const ContactList = () => {
  const visibleContacts = useSelector(selectVisibleContacts);

  return (
    <Box sx={{ flexGrow: 1, maxWidth: '800px', m: '0 auto' }}>
      <List
        sx={{ display: 'flex', flexDirection: 'column', gap: '10px', p: '0' }}
      >
        {visibleContacts.map(contact => (
          <ContactListItem key={contact.id} contact={contact} />
        ))}
      </List>
    </Box>
  );
};
