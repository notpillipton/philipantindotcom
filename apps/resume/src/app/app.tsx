import { Box } from '@mui/material'
import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { About } from '@resume/about'
import { Competencies } from '@resume/competencies'
import { Past } from '@resume/past'
import { Footer } from '@resume/footer'

export function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

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
