import * as yup from 'yup';

const phonePattern =
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}?$/;

const namePattern =
  /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;

export const schema = yup.object().shape({
  name: yup.string().matches(namePattern, 'invalid name format').required(),
  number: yup
    .string()
    .matches(phonePattern, 'invalid phone number format')
    .required(),
});
