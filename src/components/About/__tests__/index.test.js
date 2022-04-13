import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from "..";

afterEach(cleanup);

describe('About component', () => {
  // First Test: verify that the component is rendering
  it('renders', () => {
    render(<About />);
  })

  // Second Test: test case
  it('matches snapshot DOM node structure', () => {
    const { asFragment } = render(<About/>);
    expect(asFragment()).toMatchSnapshot();
  })
})