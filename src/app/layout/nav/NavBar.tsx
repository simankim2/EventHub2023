import { Button, Container, Menu, MenuItem } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom'
import SignedInMenu from './SignedInMenu';
import SignedOutButtons from './SignedOutButtons';
import { useAppSelector } from '../../store/store';

export default function NavBar() {
  const {authenticated} = useAppSelector(state => state.auth)

  return (
    <Menu inverted={true} fixed='top'>
        <Container>
            <MenuItem header as={NavLink} to='/'>
                <img src="/logo.png" alt="logo" />
                RE-vents
            </MenuItem>
            <MenuItem name='Events' as={NavLink} to='/events' />
            <MenuItem name='Scratch' as={NavLink} to='/scratch' />
            <MenuItem>
                <Button
                    as={NavLink}
                    to='/createEvent'
                    floated='right'
                    positive={true}
                    inverted={true}
                    content='Create event' />
            </MenuItem>
            {authenticated ? <SignedInMenu /> : <SignedOutButtons />}
        </Container>
    </Menu>
  )
}
