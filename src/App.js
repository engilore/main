import { Routes, Route } from 'react-router-dom'
import ProtectedRoute from './utils/projectedRoute'
import { hubPath, accountPath, mainPath, authPath, blogPath, postPath } from './container/paths'

import Navbar from './components/Navbar/index'
import Footer from './components/Footer/index'
import { Hub, Account, Main, Blog, Post, Auth } from './container/index'


function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        
        <Route 
          path={hubPath + "/*"} 
          element={
            <ProtectedRoute allowedRoles={['guardian', 'admin']}>
              <Hub />
            </ProtectedRoute>
          } 
        />
        <Route 
          path={accountPath + "/*"} 
          element={
            <ProtectedRoute>
              <Account />
            </ProtectedRoute>
          } 
        />
        <Route path={postPath + "/*"} element={<Post />} />
        <Route path={mainPath + "*"} element={<Main />} />
        <Route path={authPath + "/*"} element={<Auth />} />
        <Route path={blogPath + "/*"} element={<Blog />} />

      </Routes>
      <Footer />
    </>
  )
}

export default App
