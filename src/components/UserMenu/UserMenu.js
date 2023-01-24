import { useAuth } from 'hooks';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { StyledMenu } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const handleLogOut = () => dispatch(logOut());

  return (
    <StyledMenu>
      <p>Welcome, {user.name}!</p>
      <button type="button" onClick={handleLogOut}>
        Logout
      </button>
    </StyledMenu>
  );
};
