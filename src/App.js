import { Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar/index'
import Footer from './components/Footer/index'
import Home from './container/Home/index'
import About from './container/About/index'
import Blog from './container/Blog/index'


function App() {
  return (
    <>
      <Navbar/>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/blog' element={<Blog />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
