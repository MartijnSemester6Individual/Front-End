import { render, screen } from '@testing-library/react';
import Home from '../pages/index';
import '@testing-library/jest-dom';
import { RecoilRoot } from 'recoil';
describe('Home Component', () => {
  it('Renders landing page when in session', async () => {
    render(
      <RecoilRoot>
        <Home />
      </RecoilRoot>,
    );
    expect(screen.getByTestId('home_page')).toBeInTheDocument();
  });
});
