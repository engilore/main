import { Routes, Route } from 'react-router-dom'
import { basePath } from './paths'

import { Base } from './views/index'


const Hub = () => {
  return (
    <>
    <Routes>
      <Route path={basePath} element={<Base />} />
    </Routes>
    </>
  )
}

export default Hub