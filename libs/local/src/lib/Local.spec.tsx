import { render } from '@testing-library/react';

import Local from './Local';

describe('Local', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Local />);
    expect(baseElement).toBeTruthy();
  });
});
