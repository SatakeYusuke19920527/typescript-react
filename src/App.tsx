import React, { FC } from 'react';
import './App.css';

interface AppProps {
  message: string,
  name: string
}

const App: FC<AppProps> = (props) => {
  const { message, name } = props
  console.log(props)
  return (
    <div className="App">
      <h1>
        {message}, {name}
      </h1>
    </div>
  );
}

export default App;
