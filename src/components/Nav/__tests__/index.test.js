import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';

const categories = [
  { name: 'portraits', description: 'Portraits of people in my life'}
]
const mockCurrentCategory = jest.fn();
const mockSetCurrentCategory = jest.fn();

// cleanup statement
afterEach(cleanup);

// describe function to declare what this test suite will be testing
describe('Nav component', () => {
  // baseline test
  it('renders', ()=> {
    render(<Nav
      categories={categories}
      setCurrentCategory={mockSetCurrentCategory}
      currentCategory={mockCurrentCategory}
    />);
  })

  // snapshot test
  it('matches snapshot', () => {
    const { asFragment } = render(
    <Nav 
      categories={categories}
      setCurrentCategory={mockSetCurrentCategory}
      currentCategory={mockCurrentCategory}
    />
    );
    // assert value comparison
    expect(asFragment()).toMatchSnapshot();
  })
})

// we can test for individual elements. test to verify that the 📸 emoji is visible
describe('emoji is visible', () => {
  it('inserts emjoi into the h2', () => {
    // arrange
    const { getByLabelText } = render(
      <Nav 
        categories={categories}
        setCurrentCategory={mockSetCurrentCategory}
        currentCategory={mockCurrentCategory}
      />
    );
    // assert
    expect(getByLabelText('camera')).toHaveTextContent('📸');
  });
})

// test to see if some of our links are visible
describe('links are visible', () => {
  it('inserts text into the links', () => {
    const { getByTestId } = render(
      <Nav 
        categories={categories}
        setCurrentCategory={mockSetCurrentCategory}
        currentCategory={mockCurrentCategory}
    />
    );
    expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
    expect(getByTestId('about')).toHaveTextContent('About Me');
  });
})
