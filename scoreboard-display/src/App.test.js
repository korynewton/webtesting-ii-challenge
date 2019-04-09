import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-testing-library'
import 'jest-dom/extend-expect'; 

import Display from './components/display';

import App from './App';




describe('<Display /> ', () => {

  it('should display the correct string based on props passed', () => {
    const situation1 = { balls: 0, strikes: 0 }
    const situation2 = { balls: 3, strikes: 2 }
    const situation3 = { balls: 1, strikes: 1 }

    const { getByTestId, rerender } = render(<Display count={situation1} />)
    expect(getByTestId('strike-count').textContent).toBe('Strikes: 0')
    expect(getByTestId('ball-count').textContent).toBe('Balls: 0')

    rerender(<Display count={situation2} />) //renders Display again with new props
    expect(getByTestId('strike-count').textContent).toBe('Strikes: 2')
    expect(getByTestId('ball-count').textContent).toBe('Balls: 3')

    rerender(<Display count={situation3} />)
    expect(getByTestId('strike-count').textContent).toBe('Strikes: 1')
    expect(getByTestId('ball-count').textContent).toBe('Balls: 1')

  });
  
  
});
