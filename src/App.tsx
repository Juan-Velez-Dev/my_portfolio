import NavBar from './components/NavBar'
import AboutMe from './components/AboutMe'
import Landing from './components/Landing'
import Projects from './components/Projects'
import Portfolio from './components/Portfolio'
import { Route, Routes, useLocation } from 'react-router-dom'
function App (): JSX.Element {
  const location = useLocation()
  return (
    <>
      {location.pathname !== '/' && <NavBar />}
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/aboutme' element={<AboutMe />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/portfolio' element={<Portfolio />} />
      </Routes>
    </>
  )
}

export default App
