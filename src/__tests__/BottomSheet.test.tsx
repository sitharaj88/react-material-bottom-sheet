import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import BottomSheet from '../BottomSheet';

describe('BottomSheet', () => {
  it('renders when isOpen is true', () => {
    render(
      <BottomSheet isOpen={true} onClose={() => {}}>
        <div>Test Content</div>
      </BottomSheet>
    );
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('does not render when isOpen is false', () => {
    render(
      <BottomSheet isOpen={false} onClose={() => {}}>
        <div>Test Content</div>
      </BottomSheet>
    );
    expect(screen.queryByText('Test Content')).not.toBeInTheDocument();
  });

  it('calls onClose when backdrop is clicked', async () => {
    const onClose = jest.fn();
    render(
      <BottomSheet isOpen={true} onClose={onClose}>
        <div>Test Content</div>
      </BottomSheet>
    );
    const backdrop = screen.getByTestId('bottom-sheet-backdrop');
    await userEvent.click(backdrop);
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  // Add more tests for drag, snap points, etc.
});