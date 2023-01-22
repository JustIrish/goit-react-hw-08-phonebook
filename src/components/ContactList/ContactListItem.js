import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { deleteContact } from 'redux/operations';
import { Loader } from 'components/Loader/Loader';
import toast from 'react-hot-toast';
import PropTypes from 'prop-types';
import {
  ContactItem,
  BtnDelete,
  TextWrap,
  ContactText,
  ContactMarker,
} from './ContactListItem.styled';

export const ContactListItem = ({ contact: { id, name, number } }) => {
  const [isDeleting, setIsDeleting] = useState(false);
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

  return (
    <ContactItem>
      <TextWrap>
        <ContactMarker></ContactMarker>
        <ContactText>
          <span>{name}:</span> <span>{number}</span>
        </ContactText>
      </TextWrap>
      <BtnDelete type="button" onClick={handleOnDelete} disabled={isDeleting}>
        {isDeleting ? <Loader /> : 'Delete'}
      </BtnDelete>
    </ContactItem>
  );
};

ContactListItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};
