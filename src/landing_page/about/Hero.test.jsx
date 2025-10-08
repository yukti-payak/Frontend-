// src/components/Hero.test.jsx
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Hero from './Hero'; // Import the component you want to test

describe('Hero Component', () => {
  // Test case 1: Check if the main heading renders correctly
  it('should render the main heading', () => {
    // 1. Render the Hero component
    render(<Hero />);

    // 2. Find the heading element by its text content
    // We use a regular expression /pioneered the discount/i to make the search flexible and case-insensitive.
    const headingElement = screen.getByText(
      /pioneered the discount broking model in India/i
    );

    // 3. Assert that the element is actually in the document
    expect(headingElement).toBeInTheDocument();
  });

  // Test case 2: Check for a specific piece of text from the body
  it('should render the text about company origins', () => {
    render(<Hero />);
    
    // Find an element containing the specific text
    const originText = screen.getByText(
      /breaking all barriers that traders and investors face/i
    );

    expect(originText).toBeInTheDocument();
  });

  // Test case 3: Check for another key piece of information
  it('should mention having over 1 crore clients', () => {
    render(<Hero />);

    const clientText = screen.getByText(/Over 1\+ Crore clients/i);
    
    expect(clientText).toBeInTheDocument();
  });
});