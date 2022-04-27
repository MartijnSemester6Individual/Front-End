import { render, screen } from '@testing-library/react';
import Sidebar from '../components/Sidebar';
import '@testing-library/jest-dom';

describe('Sidebar Component', () => {
  it('Show name when in session', async () => {
    render(<Sidebar />);
    expect(screen.getByText('test')).toBeInTheDocument();
  });

  it('Shows tag on log out button when in session', async () => {
    render(<Sidebar />);
    expect(screen.getByText('@test')).toBeInTheDocument();
  });
});
