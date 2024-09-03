import Navbar from './components/Navbar/index'
import Footer from './components/Footer/index'
import {
  Main,
  Blog,
  Auth
} from './container/index'


function App() {
  return (
    <>
      <Navbar/>
        <Main />
        <Blog />
        <Auth />
      <Footer />
    </>
  )
}

export default App
