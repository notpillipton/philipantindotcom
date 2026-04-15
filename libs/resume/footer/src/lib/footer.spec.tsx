import { render, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Footer } from './footer';

jest.mock('@shared/assets/nav-items.json', () => ({
  navItems: [
    { label: 'About Philip', target: 'bio', isRoute: false },
    { label: 'Competencies', target: '/competencies', isRoute: true },
    { label: 'Contact Philip', target: 'contact', isRoute: false },
    { label: 'Time Warp', target: '/past', isRoute: true }
  ]
}), { virtual: true });

describe('Footer', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );
    expect(baseElement).toBeTruthy();
  });

  it('should render navigation items from nav-items.json', () => {
    const { getByText } = render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );
    // If nav-items.json changes, this test might break
    expect(getByText(/about/i)).toBeTruthy();
  });

  it('should dispatch popstate event when contact is clicked', () => {
    const dispatchSpy = jest.spyOn(window, 'dispatchEvent');
    const { getByText } = render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );

    const contactButton = getByText(/contact/i);
    fireEvent.click(contactButton);

    expect(dispatchSpy).toHaveBeenCalled();
    expect(dispatchSpy.mock.calls[0][0].type).toBe('popstate');
    dispatchSpy.mockRestore();
  });

  it('should handle section scrolling when on home page', () => {
    const mockElement = document.createElement('div');
    mockElement.id = 'competencies';
    mockElement.scrollIntoView = jest.fn();
    document.body.appendChild(mockElement);
    jest.spyOn(document, 'getElementById').mockReturnValue(mockElement);

    const { getByText } = render(
      <MemoryRouter initialEntries={['/']}>
        <Footer />
      </MemoryRouter>
    );

    // If nav-items.json changes, this test might break
    const compButton = getByText(/competencies/i);
    fireEvent.click(compButton);

    expect(mockElement.scrollIntoView).toHaveBeenCalled();
    document.body.removeChild(mockElement);
  });

  it('should display the current year in copyright', () => {
    const { getByText } = render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );
    const currentYear = new Date().getFullYear();
    expect(getByText(new RegExp(currentYear.toString()))).toBeTruthy();
  });
});
