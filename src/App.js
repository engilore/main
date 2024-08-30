import { Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar/index'
import Home from './container/Home/index'
import About from './container/About/index'


function App() {
  return (
    <>
      <Navbar/>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </>
  )
}

export default App
