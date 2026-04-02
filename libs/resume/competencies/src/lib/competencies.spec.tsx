import { render } from '@testing-library/react';

import Competencies from './competencies';

describe('Competencies', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Competencies />);
    expect(baseElement).toBeTruthy();
  });
});
