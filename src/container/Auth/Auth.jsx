import { Routes, Route } from 'react-router-dom'

import { 
    registerPath,
    loginPath
} from './paths'
import {
    Register,
    Login
} from './views/index'
  
  
const Auth = () => {
  return (
    <>
    <Routes>
      <Route path={registerPath} element={<Register />} />
      <Route path={loginPath} element={<Login />} />
    </Routes>
    </>
  )
}

export default Auth