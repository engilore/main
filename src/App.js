import { Routes, Route } from 'react-router-dom'
import ProtectedRoute from './utils/projectedRoute'
import { hubPath, settingsPath, mainPath, authPath, blogPath } from './container/paths'

import Navbar from './components/Navbar/index'
import Footer from './components/Footer/index'
import { Hub, Settings, Main, Blog, Auth } from './container/index'


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
          path={settingsPath + "/*"} 
          element={
            <ProtectedRoute>
              <Settings />
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
