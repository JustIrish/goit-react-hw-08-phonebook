import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const ContactsLink = styled(NavLink)`
  width: 100px;
  margin-left: 15px;
  font-size: 20px;
  color: black;
  &.active {
    color: #fff;
  }
`;
