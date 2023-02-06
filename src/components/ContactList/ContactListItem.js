import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { deleteContact } from 'redux/contacts/operations';
import { Loader } from 'components/Loader/Loader';
import toast from 'react-hot-toast';
import PropTypes from 'prop-types';
import { EditModal } from 'components/EditModal/EditModal';
import {
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  IconButton,
  ListItemSecondaryAction,
} from '@mui/material';

import AccountBoxIcon from '@mui/icons-material/AccountBox';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

export const ContactListItem = ({ contact: { id, name, number } }) => {
  const [isDeleting, setIsDeleting] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  const handleOnDelete = () => {
    setIsDeleting(true);
    dispatch(deleteContact(id))
      .unwrap()
      .then(() => {
        toast.success('Contact deleted!');
        setIsDeleting(false);
      })
      .catch(() =>
        toast.error('Something went wrong...Try reloading the page')
      );
  };

  const handleOpenModal = () => setIsOpen(true);
  const handleCloseModal = () => setIsOpen(false);

  return (
    <>
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
        <ListItemSecondaryAction
          sx={{ display: 'flex', flexDirection: 'row', gap: '16px' }}
        >
          <IconButton
            edge="end"
            aria-label="edit"
            sx={{
              '&:hover': { color: '#1976d2' },
              '&:focus': { color: '#1976d2' },
            }}
            onClick={handleOpenModal}
          >
            <EditIcon />
          </IconButton>
          <IconButton
            edge="end"
            aria-label="delete"
            sx={{
              '&:hover': { color: '#1976d2' },
              '&:focus': { color: '#1976d2' },
            }}
            onClick={handleOnDelete}
          >
            {isDeleting ? <Loader /> : <DeleteIcon />}
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
      {isOpen && (
        <EditModal
          isOpen={isOpen}
          handleClose={handleCloseModal}
          id={id}
          name={name}
          number={number}
        />
      )}
    </>
  );
};

ContactListItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};
