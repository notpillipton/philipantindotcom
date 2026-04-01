import * as ReactDOM from 'react-dom/client';
import { createRoot } from 'react-dom/client';
import App from './app/app';

class ResumeElement extends HTMLElement {
  private root!: ReactDOM.Root;

  connectedCallback() {
    const mountPoint = document.createElement('div');
    this.attachShadow({ mode: 'open' }).appendChild(mountPoint);

    this.root = createRoot(mountPoint);
    this.root.render(<App />);
  }

  disconnectedCallback() {
    this.root.unmount();
  }
}

customElements.define('resume', ResumeElement);