import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';

import Profile from './profile';

describe('Profile', () => {
  const capitalizedName = 'Ángel Cruz';
  const lowerCasedName = 'angel cruz';

  test(`should render the welcome message with ${capitalizedName} name`, () => {
    render(<Profile name={capitalizedName} />);

    expect(
      screen.getByText(`Welcome ${capitalizedName}`),
    ).toBeDefined();
  });

  test(`should not render the welcome message with ${lowerCasedName} name`, () => {
    render(<Profile name={capitalizedName} />);

    expect(
      screen.queryByText(`Welcome ${lowerCasedName}`),
    ).toBeNull();
  });

  test('should render the avatar with the first letter of the name capitalized', () => {
    render(<Profile name={lowerCasedName} />);

    const avatar = screen.getByTestId('avatar').textContent;
    expect(avatar).toEqual('A');
  });

  test('should display "This is your personal task manager"', () => {
    render(<Profile name={capitalizedName} />);

    expect(
      screen.getByText(
        'This is your personal task manager',
      ),
    ).toBeDefined();
  });
});
