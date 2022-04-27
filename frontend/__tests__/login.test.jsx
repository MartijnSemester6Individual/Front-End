import { render, screen } from '@testing-library/react';
import Login from '../pages/login';

describe('Home', () => {
  it('Show Login to your account when not in session', async () => {
    render(<Login />);
    expect(screen.getByText('Log in to your account')).toBeInTheDocument();
  });
});
