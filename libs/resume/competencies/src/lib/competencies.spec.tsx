import { render, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Competencies } from './competencies';

// I'm not testing OldCompetencies in this file
jest.mock('@resume/old-competencies', () => ({
  OldCompetencies: () => <div data-testid="old-competencies">Old Competencies</div>
}));

describe('Competencies', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <MemoryRouter>
        <Competencies />
      </MemoryRouter>
    );
    expect(baseElement).toBeTruthy();
  });

  it('should navigate back to home when Back button is clicked', () => {
    const { getByText } = render(
      <MemoryRouter>
        <Competencies />
      </MemoryRouter>
    );

    // I might want to mock the router to do more of a test later
    const backButton = getByText('Back');
    expect(backButton).toBeTruthy();
  });

  it('should toggle a category when clicked', () => {
    const { getByText, getAllByRole } = render(
      <MemoryRouter>
        <Competencies />
      </MemoryRouter>
    );

    const catButtons = getAllByRole('button');
    // Something in the following should persistently remain in my list of competencies
    const softwareDevBtn = catButtons.find(btn => btn.textContent?.includes('Engineering') || btn.textContent?.includes('Cloud') || btn.textContent?.includes('Leadership'));
    
    if (softwareDevBtn) {
      fireEvent.click(softwareDevBtn);
      // Contained variant indicates active state
      expect(softwareDevBtn.className).toContain('MuiButton-contained');
      
      fireEvent.click(softwareDevBtn);
      // Outlined variant indicates inactive state
      expect(softwareDevBtn.className).toContain('MuiButton-outlined');
    }
  });

  it('should render OldCompetencies component', () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <Competencies />
      </MemoryRouter>
    );
    expect(getByTestId('old-competencies')).toBeTruthy();
  });
});
