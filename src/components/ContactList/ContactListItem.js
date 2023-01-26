import { useDispatch } from 'react-redux';
// import { useState } from 'react';
import { deleteContact } from 'redux/operations';
// import { Loader } from 'components/Loader/Loader';
import toast from 'react-hot-toast';
import PropTypes from 'prop-types';
import {
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  IconButton,
} from '@mui/material';

import AccountBoxIcon from '@mui/icons-material/AccountBox';
import DeleteIcon from '@mui/icons-material/Delete';

export const ContactListItem = ({ contact: { id, name, number } }) => {
  // const [isDeleting, setIsDeleting] = useState(false);
  const dispatch = useDispatch();

  const handleOnDelete = () => {
    // setIsDeleting(true);
    dispatch(deleteContact(id))
      .unwrap()
      .then(() => {
        toast.success('Contact deleted!');
        // setIsDeleting(false);
      })
      .catch(() =>
        toast.error('Something went wrong...Try reloading the page')
      );
  };

  return (
    <ListItem
      sx={{
        backgroundColor: 'rgba(152, 174, 194, 0.16)',
        borderRadius: '4px',
        boxShadow: 4,
      }}
    >
      <ListItemAvatar>
        <Avatar
          sx={{
            color: '#1976d2',
            backgroundColor: 'transparent',
          }}
        >
          <AccountBoxIcon sx={{ width: '30px', height: '30px' }} />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={name} secondary={number} />
      <IconButton
        edge="end"
        aria-label="delete"
        sx={{
          '&:hover': { color: '#1976d2' },
          '&:focus': { color: '#1976d2' },
        }}
        onClick={handleOnDelete}
      >
        <DeleteIcon />
      </IconButton>
    </ListItem>
    // <ContactItem>
    //   <TextWrap>
    //     <ContactMarker></ContactMarker>
    //     <ContactText>
    //       <span>{name}:</span> <span>{number}</span>
    //     </ContactText>
    //   </TextWrap>
    //   <BtnDelete type="button" onClick={handleOnDelete} disabled={isDeleting}>
    //     {isDeleting ? <Loader /> : 'Delete'}
    //   </BtnDelete>
    // </ContactItem>
  );
};

ContactListItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};
