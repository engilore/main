import { Routes, Route } from 'react-router-dom'

import { 
  homePath,
  aboutPath
} from './paths'
import {
  Home,
  About
} from './views/index'


const Main = () => {
  return (
    <>
    <Routes>
      <Route path={homePath} element={<Home />} />
      <Route path={aboutPath} element={<About />} />
    </Routes>
    </>
  )
}

export default Main