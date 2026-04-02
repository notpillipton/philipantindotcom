import { render } from '@testing-library/react';

import Past from './past';

describe('Past', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Past />);
    expect(baseElement).toBeTruthy();
  });
});
