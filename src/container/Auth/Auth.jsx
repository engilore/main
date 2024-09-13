import { Routes, Route } from 'react-router-dom'
import { registerPath, loginPath, logoutPath } from './paths'
import GuestRoute from '../../utils/guestRoute'

import { Register, Login, Logout } from './views/index'
  
  
const Auth = () => {
  return (
    <>
    <Routes>
      <Route 
        path={registerPath} 
        element={
          <GuestRoute>
            <Register />
          </GuestRoute>
        } 
      />
      <Route 
        path={loginPath} 
        element={
          <GuestRoute>
            <Login />
          </GuestRoute>
        } 
      />
      <Route path={logoutPath} element={<Logout />} />
    </Routes>
    </>
  )
}

export default Auth