import { Box } from '@mui/material'
import Header from './components/Header'
import About from './components/About'
import Competencies from './components/Competencies'
import Past from './components/Past'
import Footer from './components/Footer'

function App() {
  return (
    <Box>
      <Header />
      <About />
      <Competencies />
      <Past />
      <Footer />
    </Box>
  )
}

export default App
