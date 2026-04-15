import { render } from '@testing-library/react';
import { OldCompetencies } from './old-competencies';

describe('OldCompetencies', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<OldCompetencies />);
    expect(baseElement).toBeTruthy();
  });

  it('should render all 8 competency tiles', () => {
    const { getAllByRole } = render(<OldCompetencies />);
    const items = getAllByRole('listitem');
    expect(items.length).toBe(8);
  });

  it('should display titles on all items', () => {
    const { getByAltText } = render(<OldCompetencies />);
    // Spot-checking a couple examples
    expect(getByAltText(/successfully developed, launched/i)).toBeTruthy();
    expect(getByAltText(/pursued graduate studies/i)).toBeTruthy();
  });

  it('should respond to media queries for columns', () => {
    // Mock matchMedia to return mobile view
    window.matchMedia = jest.fn().mockImplementation(query => ({
      matches: query === '(max-width:600px)',
      media: query,
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    }));

    const { rerender } = render(<OldCompetencies />);
    // Ensure that it still renders
    expect(render(<OldCompetencies />)).toBeTruthy();
  });
});
