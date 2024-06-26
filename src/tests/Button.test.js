// src/components/Button.test.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from './Button';

describe('Button Component', () => {
  it('renders a button with the provided text', () => {
    const { getByTestId } = render(<Button>Hello</Button>);
    const buttonElement = getByTestId('button');
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveTextContent('Hello');
  });

  it('calls onClick prop when clicked', () => {
    const onClickMock = jest.fn();
    const { getByTestId } = render(<Button onClick={onClickMock}>Click me</Button>);
    const buttonElement = getByTestId('button');
    fireEvent.click(buttonElement);
    expect(onClickMock).toHaveBeenCalled();
  });
});
