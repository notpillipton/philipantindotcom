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

  it('should render the decommission notice for the PHP archive', () => {
    const { getByText, queryByRole } = render(
      <MemoryRouter>
        <Past />
      </MemoryRouter>
    );
    expect(getByText(/PHP2Shell/i)).toBeTruthy();
    const archiveButton = queryByRole('link', { name: /Blast Me to the Past!/i });
    expect(archiveButton).toBeNull();
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
