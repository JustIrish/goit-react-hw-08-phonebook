import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'redux/selectors';
import { setFilter } from 'redux/filterSlice';
import { TextField, Container } from '@mui/material';

export const Filter = () => {
  const dispatch = useDispatch();
  const value = useSelector(selectFilter);

  const changeFilter = evt => {
    dispatch(setFilter(evt.currentTarget.value.trim()));
  };

  return (
    <Container
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        mt: '20px',
        mb: '20px',
      }}
    >
      <TextField
        fullWidth
        type="text"
        label="Find contacts by name"
        value={value}
        variant="outlined"
        size="normal"
        sx={{ maxWidth: '700px' }}
        onChange={changeFilter}
      />
    </Container>
  );
};
