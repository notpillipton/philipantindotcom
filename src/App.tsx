import { useState } from 'react'
import { Box } from '@mui/material'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import About from './components/About'
import Competencies from './components/Competencies'
import Contact from './components/Contact'
import Past from './components/Past'
import Footer from './components/Footer'
import ContactForm from './components/ContactForm'

function App() {
  const [contactOpen, setContactOpen] = useState(false);

  const handleOpenContact = () => setContactOpen(true);
  const handleCloseContact = () => setContactOpen(false);

  return (
    <Box>
      <Header onOpenContact={handleOpenContact} />
      <Routes>
        <Route path="/" element={
          <>
            <About />
            <Contact onOpenContact={handleOpenContact} />
            <Past />
          </>
        } />
        <Route path="/competencies" element={<Competencies />} />
      </Routes>
      <Footer />
      <ContactForm open={contactOpen} onClose={handleCloseContact} />
    </Box>
  )
}

export default App
