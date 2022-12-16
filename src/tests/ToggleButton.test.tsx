import React from 'react';
import { render, screen } from '@testing-library/react';
import ToggleButton from "../ToggleButton";
import {act} from "react-dom/test-utils";

test('if click button twice, background color should change to red then blue', () => {
  render(<ToggleButton />);
  const button = screen.getByText(/toggle me/i);
  act(()=> {button.click()})
  expect(button.style.backgroundColor).toBe('red')
  act(()=> {button.click()})
  expect(button.style.backgroundColor).toBe('blue')
});


