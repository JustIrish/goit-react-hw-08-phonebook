import { Box, Modal, Grid, TextField } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { schema } from 'components/common/validationSchema';
import toast from 'react-hot-toast';
import { selectIsLoading } from 'redux/contacts/selectors';
import { updateContact } from 'redux/contacts/operations';

const styledModal = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: { xs: '100%', sm: '400px' },
  bgcolor: 'background.paper',
  borderRadius: '6px',
  boxShadow: 24,
  p: 6,
};

export const EditModal = ({ isOpen, handleClose, id, name, number }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  const handleSubmit = (values, { resetForm }) => {
    if (
      name.trim().toLowerCase() === values.name.trim().toLowerCase() &&
      number === values.number
    ) {
      toast.error('The same values');
      return;
    }

    dispatch(updateContact(values))
      .unwrap()
      .then(() => {
        toast.success('Contact edited!');
        resetForm();
        handleClose();
      })
      .catch(() =>
        toast.error('Something went wrong...Try reloading the page')
      );
  };

  const formik = useFormik({
    initialValues: {
      id,
      name,
      number,
    },
    validationSchema: schema,
    onSubmit: handleSubmit,
  });

  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="modal-edit-contact"
      aria-describedby="modal-edit-contact"
    >
      <Box sx={styledModal}>
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
            loading={isLoading}
          >
            Edit contact
          </LoadingButton>
        </form>
      </Box>
    </Modal>
  );
};
