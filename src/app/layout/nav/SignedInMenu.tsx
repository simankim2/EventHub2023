import { Link, useNavigate } from 'react-router-dom';
import { Menu, Image, Dropdown } from 'semantic-ui-react';
import { useAppSelector } from '../../store/store';
import { auth } from '../../config/firebase';
import { signOut } from 'firebase/auth';

export default function SignedInMenu() {
  const {currentUser} = useAppSelector(state => state.auth);
  const navigate = useNavigate();

  async function handleSignOut() {
    await signOut(auth)
    navigate('/');
  }

  return (
    <Menu.Item position='right'>
      <Image avatar spaced='right' src={currentUser?.photoURL || '/user.png'} />
      <Dropdown pointing='top left' text={currentUser?.displayName as string}>
        <Dropdown.Menu>
          <Dropdown.Item as={Link} to='/createEvent' text='Create event' icon='plus' />
          <Dropdown.Item text='My profile' icon='plus' />
          <Dropdown.Item as={Link} to='/account' text='My account' icon='settings' />
          <Dropdown.Item onClick={handleSignOut} text='Sign out' icon='power' />
        </Dropdown.Menu>
      </Dropdown>
    </Menu.Item>
  )
}
