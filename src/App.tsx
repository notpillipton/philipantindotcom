import { useState } from 'react'
import { Box } from '@mui/material'
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
      <About />
      <Competencies />
      <Contact onOpenContact={handleOpenContact} />
      <Past />
      <Footer />
      <ContactForm open={contactOpen} onClose={handleCloseContact} />
    </Box>
  )
}

export default App
