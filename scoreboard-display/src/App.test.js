import React from 'react';
import ReactDOM from 'react-dom';
import { render, fireEvent, cleanup } from 'react-testing-library';
import 'jest-dom/extend-expect'; 

import Display from './components/display';
import Dashboard from './components/dashboard';
import App from './App';

afterEach(cleanup);


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

    rerender(<Display count={situation3} />) //renders Display again with new props
    expect(getByTestId('strike-count').textContent).toBe('Strikes: 1')
    expect(getByTestId('ball-count').textContent).toBe('Balls: 1')

  });
});

describe('<Dashboard />', () => {

  it('increment strikes until 2, then reset', () => {
    const appTree = (
      <App >
        <Display />
        <Dashboard />
      </App>
      )

    const { getByTestId } = render(appTree)

    const strikeBtn = getByTestId('strike-btn')
  

    expect(getByTestId('strike-count').textContent).toBe('Strikes: 0')
    expect(getByTestId('ball-count').textContent).toBe('Balls: 0')
    fireEvent.click(strikeBtn);
    expect(getByTestId('ball-count').textContent).toBe('Balls: 0')
    expect(getByTestId('strike-count').textContent).toBe('Strikes: 1')
    fireEvent.click(strikeBtn);
    expect(getByTestId('ball-count').textContent).toBe('Balls: 0')
    expect(getByTestId('strike-count').textContent).toBe('Strikes: 2')
    fireEvent.click(strikeBtn);
    expect(getByTestId('ball-count').textContent).toBe('Balls: 0')
    expect(getByTestId('strike-count').textContent).toBe('Strikes: 0')
  });

  it('increment balls until 3, then reset', () => {
    const appTree = (
      <App >
        <Display />
        <Dashboard />
      </App>
      )

    const { getByTestId } = render(appTree)

    const ballBtn = getByTestId('ball-btn')

    expect(getByTestId('strike-count').textContent).toBe('Strikes: 0')
    expect(getByTestId('ball-count').textContent).toBe('Balls: 0')
    fireEvent.click(ballBtn);
    expect(getByTestId('ball-count').textContent).toBe('Balls: 1')
    expect(getByTestId('strike-count').textContent).toBe('Strikes: 0')
    fireEvent.click(ballBtn);
    expect(getByTestId('ball-count').textContent).toBe('Balls: 2')
    expect(getByTestId('strike-count').textContent).toBe('Strikes: 0')
    fireEvent.click(ballBtn);
    expect(getByTestId('ball-count').textContent).toBe('Balls: 3')
    expect(getByTestId('strike-count').textContent).toBe('Strikes: 0')
    fireEvent.click(ballBtn);
    expect(getByTestId('ball-count').textContent).toBe('Balls: 0')
    expect(getByTestId('strike-count').textContent).toBe('Strikes: 0')
  });

  it('foul will increase strikes until 2 but will not incrememnt further', () => {
    const appTree = (
      <App >
        <Display />
        <Dashboard />
      </App>
      )

    const { getByTestId } = render(appTree)

    const foulBtn = getByTestId('foul-btn')

    expect(getByTestId('strike-count').textContent).toBe('Strikes: 0')
    expect(getByTestId('ball-count').textContent).toBe('Balls: 0')
    fireEvent.click(foulBtn);
    expect(getByTestId('ball-count').textContent).toBe('Balls: 0')
    expect(getByTestId('strike-count').textContent).toBe('Strikes: 1')
    fireEvent.click(foulBtn);
    expect(getByTestId('ball-count').textContent).toBe('Balls: 0')
    expect(getByTestId('strike-count').textContent).toBe('Strikes: 2')
    fireEvent.click(foulBtn);
    expect(getByTestId('ball-count').textContent).toBe('Balls: 0')
    expect(getByTestId('strike-count').textContent).toBe('Strikes: 2')
  });
  
});
