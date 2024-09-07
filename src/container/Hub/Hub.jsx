import { Routes, Route } from 'react-router-dom'
import { dashPath } from './paths'

import { Dash } from './views/index'


const Hub = () => {
  return (
    <>
    <Routes>
      <Route path={dashPath} element={<Dash />} />
    </Routes>
    </>
  )
}

export default Hub