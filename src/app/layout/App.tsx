import { Container } from 'semantic-ui-react'
import { Outlet, ScrollRestoration, useLocation } from 'react-router-dom'
import NavBar from './nav/NavBar'
import HomePage from '../../features/home/HomePage';
import ModalManager from '../common/modals/ModalManager';
import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import { useAppDispatch } from '../store/store';
import { logOut, signIn } from '../../features/auth/authSlice';
import { auth } from '../config/firebase';

function App() {
  const location = useLocation();
  const dispatch = useAppDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, {
      next: user => {
        if (user) {
          dispatch(signIn(user))
        } else {
          dispatch(logOut())
        }
      },
      error: error => console.log(error),
      complete: () => {}
    })
  }, [dispatch])

  return (
    <>
      {location.pathname === '/' ? <HomePage /> : (
        <>
          <ScrollRestoration />
          <ModalManager />
          <NavBar />
          <Container className='main'>
            <Outlet />
          </Container>
        </>
      )}
    </>
  )
}

export default App
