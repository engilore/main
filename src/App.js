import { Routes, Route } from 'react-router-dom'
import ProtectedRoute from './utils/projectedRoute'
import { hubPath, accountPath, profilePath, mainPath, authPath, blogPath, postPath } from './container/paths'

import Navbar from './components/Navbar/index'
import Footer from './components/Footer/index'
import { Hub, Account, Profile, Main, Blog, Post, Auth } from './container/index'


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
            path={postPath + "/*"} 
            element={
              <ProtectedRoute allowedRoles={['guardian', 'admin']}>
                <Post />
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
        <Route 
          path={profilePath + "/*"} 
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          } 
        />
        <Route path={mainPath + "*"} element={<Main />} />
        <Route path={authPath + "/*"} element={<Auth />} />
        <Route path={blogPath + "/*"} element={<Blog />} />

      </Routes>
      <Footer />
    </>
  )
}

export default App
