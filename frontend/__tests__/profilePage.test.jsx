import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Profile from '../pages/[tweetUserName]';

describe('Renders profile page', () => {
  it('should render profile page ', async () => {
    render(<Profile />);
    expect(screen.getByText('Profile Page')).toBeInTheDocument();
  });
});
