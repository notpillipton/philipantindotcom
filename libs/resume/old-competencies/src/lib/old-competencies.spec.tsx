import { render } from '@testing-library/react';

import OldCompetencies from './old-competencies';

describe('OldCompetencies', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<OldCompetencies />);
    expect(baseElement).toBeTruthy();
  });
});
