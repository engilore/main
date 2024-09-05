import { Routes, Route } from 'react-router-dom'
import { baseBlogPath } from './paths'

import Base from './views/index'


const Blog = () => {
  return (
    <>
    <Routes>
      <Route path={baseBlogPath} element={<Base />} />
    </Routes>
    </>
  )
}

export default Blog