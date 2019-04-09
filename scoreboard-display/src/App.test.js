import React from 'react';
import ReactDOM from 'react-dom';
// import { render, fireEvent } from 'react-testing-library'
// import 'jest-dom/extend-expect'; 
// import Dashboard from '../components/dashboard';
// import Display from '../components/display';

import App from './App';

describe('App component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  
});


// describe('<Dashboard />', () => {
//     it('correctly increments when buttons are fired', () => {
//       const testCount = {
//         balls: 1,
//         strikes: 1
//       }
    
//       const { getByText } = render(<App state={testCount} />)

//     //   const ballBtn = getByText(/ball/i);
//     //   const strikeBtn = getByText(/strike/i);
//     //   const foulBtn = getByText(/foul/i);
//     //   const hitBtn = getByText(/hit/i);
      
  
//     //   fireEvent.click(button);
//     //   // getByText(/Balls:/)
      
//     });  
  // });
