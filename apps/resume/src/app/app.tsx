import { Box } from '@mui/material'
import { Routes, Route } from 'react-router-dom'
import About from './components/About'
import Competencies from './components/Competencies'
import Past from './components/Past'
import Footer from './components/Footer'

export function App() {
  return (
    <Box>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/competencies" element={<Competencies />} />
        <Route path="/past" element={<Past />} />
      </Routes>
      <Footer/>
    </Box>
  )
}

export default App
