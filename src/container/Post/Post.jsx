import { Routes, Route } from 'react-router-dom'
import { createPath, draftPath } from './paths'

import {Create, Draft} from './views/index'


const Post = () => {
  return (
    <>
    <Routes>
      <Route path={createPath} element={<Create />} />
      <Route path={draftPath} element={<Draft />} />
    </Routes>
    </>
  )
}

export default Post