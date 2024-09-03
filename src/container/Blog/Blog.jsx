import { Routes, Route } from 'react-router-dom'

import {
  blogPath
} from './paths'
import Base from './views/index'


const Blog = () => {
  return (
    <>
    <Routes>
      <Route path={blogPath} element={<Base />} />
    </Routes>
    </>
  )
}

export default Blog