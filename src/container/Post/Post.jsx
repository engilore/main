import { Routes, Route } from 'react-router-dom'
import { createPath } from './paths'

import Create from './views/index'


const Post = () => {
  return (
    <>
    <Routes>
      <Route path={createPath} element={<Create />} />
    </Routes>
    </>
  )
}

export default Post