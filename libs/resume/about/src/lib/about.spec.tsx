import { render, fireEvent, act } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { About } from './about';

describe('About', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('should render successfully', () => {
    const { baseElement } = render(
      <MemoryRouter>
        <About />
      </MemoryRouter>
    );
    expect(baseElement).toBeTruthy();
  });

  it('should rotate hero text after 5 seconds', () => {
    const { getByText, queryByText } = render(
      <MemoryRouter>
        <About />
      </MemoryRouter>
    );

    const firstText = 'Programmer ~ Professor ~ Philosopher';
    const secondText = 'Engineer ~ Educator ~ Ethicist';

    expect(getByText(firstText)).toBeTruthy();

    act(() => {
      jest.advanceTimersByTime(5000);
    });

    expect(getByText(secondText)).toBeTruthy();
  });

  it('should update search params when "Get this guy on the line!" is clicked', () => {
    const dispatchSpy = jest.spyOn(window, 'dispatchEvent');
    const { getByText } = render(
      <MemoryRouter>
        <About />
      </MemoryRouter>
    );

    const contactButton = getByText('Get this guy on the line!');
    fireEvent.click(contactButton);

    // Check if popstate event was dispatched (used for cross-framework communication in this app)
    expect(dispatchSpy).toHaveBeenCalledWith(expect.any(Event));
    expect(dispatchSpy.mock.calls[0][0].type).toBe('popstate');
    dispatchSpy.mockRestore();
  });

  it('should handle "Show me more" button scroll', () => {
    const mockElement = document.createElement('div');
    mockElement.id = 'bio';
    mockElement.scrollIntoView = jest.fn();
    document.body.appendChild(mockElement);
    jest.spyOn(document, 'getElementById').mockReturnValue(mockElement);

    const { getByText } = render(
      <MemoryRouter>
        <About />
      </MemoryRouter>
    );

    const moreButton = getByText('Show me more');
    fireEvent.click(moreButton);

    expect(mockElement.scrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth' });
    document.body.removeChild(mockElement);
  });

  it('should have a working resume download link', () => {
    const { getByText } = render(
      <MemoryRouter>
        <About />
      </MemoryRouter>
    );

    const downloadLink = getByText("Download Philip's Resume").closest('a');
    expect(downloadLink?.getAttribute('href')).toContain('.pdf');
    expect(downloadLink?.hasAttribute('download')).toBe(true);
  });
});
