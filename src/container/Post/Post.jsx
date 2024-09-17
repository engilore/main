import { Routes, Route } from 'react-router-dom'
import ProtectedRoute from '../../utils/projectedRoute'
import { viewPath, createPath, draftPath } from './paths'

import {View, Create, Draft} from './views/index'


const Post = () => {
  return (
    <>
    <Routes>
      <Route path={viewPath} element={<View />} />
      <Route path={createPath} element={
        <ProtectedRoute allowedRoles={['guardian', 'admin']}>
          <Create />
        </ProtectedRoute>
      } />
      <Route path={draftPath} element={
        <ProtectedRoute allowedRoles={['guardian', 'admin']}>
          <Draft />
        </ProtectedRoute>
      } />
    </Routes>
    </>
  )
}

export default Post