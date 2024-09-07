import { Routes, Route } from 'react-router-dom'
import { basePath } from './paths'

import Base from './views/index'


const Blog = () => {
  return (
    <>
    <Routes>
      <Route path={basePath} element={<Base />} />
    </Routes>
    </>
  )
}

export default Blog