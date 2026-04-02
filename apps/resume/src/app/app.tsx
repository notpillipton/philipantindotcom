import { Box } from '@mui/material'
import { Routes, Route } from 'react-router-dom'
import { About } from '@resume/about'
import { Competencies } from '@resume/competencies'
import { Past } from '@resume/past'
import { Footer } from '@resume/footer'

export function App() {
  return (
    <Box>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/competencies" element={<Competencies />} />
        <Route path="/past" element={<Past />} />
      </Routes>
      <Footer />
    </Box>
  )
}

export default App
