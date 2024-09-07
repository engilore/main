import { Routes, Route } from 'react-router-dom'
import { registerPath, loginPath, logoutPath } from './paths'

import { Register, Login, Logout } from './views/index'
  
  
const Auth = () => {
  return (
    <>
    <Routes>
      <Route path={registerPath} element={<Register />} />
      <Route path={loginPath} element={<Login />} />
      <Route path={logoutPath} element={<Logout />} />
    </Routes>
    </>
  )
}

export default Auth