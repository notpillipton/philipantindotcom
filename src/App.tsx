import { Box } from '@mui/material'
import Header from './components/Header'
import About from './components/About'
import Competencies from './components/Competencies'
import Projects from './components/Projects'
import Updates from './components/Updates'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <Box>
      <Header />
      <About />
      <Competencies />
      <Projects />
      <Updates />
      <Contact />
      <Footer />
    </Box>
  )
}

export default App
