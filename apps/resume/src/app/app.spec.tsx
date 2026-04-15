import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './app';

// Mock the sub-components to focus on App's logic
jest.mock('@resume/about', () => ({ About: () => <div data-testid="about-page">About</div> }));
jest.mock('@resume/competencies', () => ({ Competencies: () => <div data-testid="competencies-page">Competencies</div> }));
jest.mock('@resume/past', () => ({ Past: () => <div data-testid="past-page">Past</div> }));
jest.mock('@resume/footer', () => ({ Footer: () => <div data-testid="footer">Footer</div> }));

describe('App', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    expect(baseElement).toBeTruthy();
  });

  it('should render About page by default', () => {
    const { getByTestId } = render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );
    expect(getByTestId('about-page')).toBeTruthy();
  });

  it('should render Competencies page on /competencies', () => {
    const { getByTestId } = render(
      <MemoryRouter initialEntries={['/competencies']}>
        <App />
      </MemoryRouter>
    );
    expect(getByTestId('competencies-page')).toBeTruthy();
  });

  it('should call window.scrollTo on route change', () => {
    const scrollSpy = jest.spyOn(window, 'scrollTo');
    const { rerender } = render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );
    
    expect(scrollSpy).toHaveBeenCalledWith(0, 0);
    
    rerender(
      <MemoryRouter initialEntries={['/competencies']}>
        <App />
      </MemoryRouter>
    );

    // Location changed, useEffect should trigger
    expect(scrollSpy).toHaveBeenCalled();
  });
});
