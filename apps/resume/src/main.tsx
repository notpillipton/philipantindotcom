import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider, CssBaseline } from '@mui/material'
import { BrowserRouter } from 'react-router-dom'
import theme from '@shared/theme'
import App from './app/app'
import { injectThemeVariables } from '@shared/theme-tokens'

// Inject shared theme tokens into the global scope as CSS variables
injectThemeVariables()

import '@shared/assets/theme-variables.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>,
)
