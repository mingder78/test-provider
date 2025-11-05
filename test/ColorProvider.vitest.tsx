/// <reference types="react" />
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from "vitest";
import { ThemeProvider } from '../src/';

function Consumer() {
  return (
    <div>
      <span data-testid="theme">theme</span>
    </div>
  );
}

describe('ThemeProvider', () => {

  it('defaults to light and toggles correctly', async () => {
    render(
      <ThemeProvider>
        <Consumer />
      </ThemeProvider>
    );

    expect(screen.getByTestId('theme').textContent).toBe('theme');
  });

})
