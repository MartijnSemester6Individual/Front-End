import { render, waitFor } from '@testing-library/react';
import Home from '../pages/index';

describe('Page title', () => {
  it('should render the title', () => {
    render(<Home />);

    waitFor(() => {
      expect(document.title).toEqual("Kwetter")
    })
  });
});
