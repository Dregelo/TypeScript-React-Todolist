import React from 'react';
import ReactDOM from 'react-dom';

const App = (): JSX.Element => {
  const sum = (a: number, b: number): number => a + b;
  return <div> Hello! {sum(5, 11)} </div>;
};

const root = document.getElementById('app-root');

ReactDOM.render(<App />, root);

export default App;
