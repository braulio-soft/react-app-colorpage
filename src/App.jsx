import { Routes, Route, } from 'react-router'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import NavBar from './components/Navbar'
import ColorPage from './pages/ColorPage'

function App() {
  return (
    <>
      <div id="container">
        <h1>Hello React Router!</h1>
        <div id="navbar"><NavBar /></div>
        <div id="main-section"> <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/:color' element={<ColorPage />} />
        </Routes></div>
      </div>
    </>
  )
}


export default App
