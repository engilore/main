import { Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar/index'
import Footer from './components/Footer/index'
import {
  Home,
  About
} from './container/Main/index'
import Base from './container/Blog/index'


function App() {
  return (
    <>
      <Navbar/>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/blog' element={<Base />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
