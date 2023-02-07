import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { addContact } from 'redux/contacts/operations';
import { selectContacts } from 'redux/contacts/selectors';
import { useFormik } from 'formik';
import { schema } from 'components/common/validationSchema';
import toast from 'react-hot-toast';
import { Box, Container, TextField, Grid } from '@mui/material';
import { LoadingButton } from '@mui/lab';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const [isAdding, setIsAdding] = useState(false);

  const handleSubmit = ({ name, number }, { resetForm }) => {
    if (
      contacts.some(
        contact => contact.name.toLowerCase() === name.trim().toLowerCase()
      )
    )
      return toast.error(`${name} is already in contacts.`);

    if (contacts.some(contact => contact.number === number.trim()))
      return toast.error(`${number} is already in contacts.`);

    setIsAdding(true);
    dispatch(addContact({ name, number }))
      .unwrap()
      .then(() => {
        toast.success('Contact added!');
        resetForm();
        setIsAdding(false);
      })
      .catch(() =>
        toast.error('Something went wrong...Try reloading the page')
      );
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      number: '',
    },
    validationSchema: schema,
    onSubmit: handleSubmit,
  });

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
        <form autoComplete="off" onSubmit={formik.handleSubmit}>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <TextField
                type="text"
                name="name"
                required
                fullWidth
                id="name"
                value={formik.values.name}
                label="Name"
                onChange={formik.handleChange}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                type="tel"
                name="number"
                required
                fullWidth
                id="number"
                value={formik.values.number}
                label="Number"
                onChange={formik.handleChange}
                error={formik.touched.number && Boolean(formik.errors.number)}
                helperText={formik.touched.number && formik.errors.number}
              />
            </Grid>
          </Grid>
          <LoadingButton
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            loading={isAdding}
          >
            Add contact
          </LoadingButton>
        </form>
      </Box>
    </Container>
  );
};
