import React, { FC, useState, useEffect } from 'react';
import './App.css';

import useApi from './api'

interface AppProps {
  message: string,
}

const App: FC<AppProps> = (props) => {
  const { message } = props
  const value = useApi()

  useEffect(() => {
    console.log(value)
  }, [value]);

  return (
    <div className="App">
      <h1>
        {message}
        {value}
      </h1>
    </div>
  );
}

App.defaultProps = {
  message: 'Hello !!!',
}

export default App;
