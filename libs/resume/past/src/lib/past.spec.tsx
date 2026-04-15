import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Past } from './past';

describe('Past', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <MemoryRouter>
        <Past />
      </MemoryRouter>
    );
    expect(baseElement).toBeTruthy();
  });

  it('should render the "How it started" section', () => {
    const { getByText } = render(
      <MemoryRouter>
        <Past />
      </MemoryRouter>
    );
    expect(getByText(/"How it started"/i)).toBeTruthy();
  });

  it('should render the "How it\'s going" section', () => {
    const { getByText } = render(
      <MemoryRouter>
        <Past />
      </MemoryRouter>
    );
    expect(getByText(/"How it's going"/i)).toBeTruthy();
  });

  it('should have a link to the archive', () => {
    const { getByText } = render(
      <MemoryRouter>
        <Past />
      </MemoryRouter>
    );
    const archiveLink = getByText(/Blast Me to the Past!/i).closest('a');
    expect(archiveLink?.getAttribute('href')).toBe('https://philipantin.com/archive');
    expect(archiveLink?.getAttribute('target')).toBe('_blank');
    expect(archiveLink?.getAttribute('rel')).toBe('noopener noreferrer');
  });

  it('should render the Back button', () => {
    const { getByText } = render(
      <MemoryRouter>
        <Past />
      </MemoryRouter>
    );
    expect(getByText(/back/i)).toBeTruthy();
  });
});
