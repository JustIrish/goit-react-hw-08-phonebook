import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { addContact } from 'redux/operations';
import { selectContacts, selectIsLoading } from 'redux/selectors';
import { nanoid } from 'nanoid';
import toast from 'react-hot-toast';
import { Box, Container, TextField, Grid } from '@mui/material';
import { LoadingButton } from '@mui/lab';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const nameInputId = nanoid();
  const numberInputId = nanoid();

  const handleChange = evt => {
    const { name, value } = evt.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;

      default:
        break;
    }
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    if (
      contacts.some(
        contact => contact.name.toLowerCase() === name.trim().toLowerCase()
      )
    )
      return toast.error(`${name} is already in contacts.`);

    if (contacts.some(contact => contact.number === number.trim()))
      return toast.error(`${number} is already in contacts.`);

    const contact = { name, number };
    dispatch(addContact(contact))
      .unwrap()
      .then(() => {
        toast.success('Contact added!');
        reset();
      })
      .catch(() =>
        toast.error('Something went wrong...Try reloading the page')
      );
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <form onSubmit={handleSubmit}>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <TextField
                type="text"
                name="name"
                required
                fullWidth
                id={nameInputId}
                value={name}
                onChange={handleChange}
                label="Name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                type="tel"
                name="number"
                required
                fullWidth
                id={numberInputId}
                value={number}
                onChange={handleChange}
                label="Number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              />
            </Grid>
          </Grid>
          <LoadingButton
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            loading={isLoading}
          >
            Add contact
          </LoadingButton>
        </form>
      </Box>
    </Container>
  );
};
