import { render, screen } from '@testing-library/react';
import Post from '../pages/[tweetUserName]/status/[id]';
import '@testing-library/jest-dom';

describe('Renders a post', () => {
  it('should render post page ', async () => {
    render(<Post />);
    expect(screen.getByText('This is a post')).toBeInTheDocument();
  });
});
