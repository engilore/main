import { Routes, Route } from 'react-router-dom'
import { mainPath, authPath, blogPath } from './container/paths'

import Navbar from './components/Navbar/index'
import Footer from './components/Footer/index'
import { Main, Blog, Auth } from './container/index'


function App() {
  return (
    <>
      <Navbar/>
      <Routes>

      <Route path={mainPath + "*"} element={<Main />} />
      <Route path={authPath + "/*"} element={<Auth />} />
      <Route path={blogPath + "/*"} element={<Blog />} />

      </Routes>
      <Footer />
    </>
  )
}

export default App
