import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { createRoot } from 'react-dom/client';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import theme from './theme';
import App from './app/app';

import '@fontsource/philosopher/400.css';
import '@fontsource/philosopher/700.css';
import '@fontsource/ubuntu/300.css';
import '@fontsource/ubuntu/400.css';
import '@fontsource/ubuntu/500.css';
import '@fontsource/ubuntu/700.css';
import '@shared/assets/theme-variables.css';

class ErrorBoundary extends React.Component<{children: React.ReactNode}, {hasError: boolean, error: any}> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  static getDerivedStateFromError(error: any) {
    return { hasError: true, error };
  }
  componentDidCatch(error: any, errorInfo: any) {
    console.error("🚨 Unmasked MFE Error:", error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '40px 20px', textAlign: 'center', fontFamily: 'Ubuntu, sans-serif', color: '#555' }}>
          <h2 style={{ color: '#cc3300', margin: '0 0 16px 0', fontFamily: 'Philosopher, sans-serif' }}>Something went wrong.</h2>
          <p style={{ margin: 0, fontSize: '18px' }}>
            We're having trouble loading this section of the site right now. Please try refreshing the page.
          </p>
        </div>
      );
    }
    return this.props.children;
  }
}

class ResumeElement extends HTMLElement {
  private root!: ReactDOM.Root;

  connectedCallback() {
    const mountPoint = document.createElement('div');
    this.attachShadow({ mode: 'open' }).appendChild(mountPoint);

    this.root = createRoot(mountPoint);
    this.root.render(
      <ErrorBoundary>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ThemeProvider>
      </ErrorBoundary>
    );
  }

  disconnectedCallback() {
    this.root.unmount();
  }
}

if (!customElements.get('resume-mfe')) {
  customElements.define('resume-mfe', ResumeElement);
}