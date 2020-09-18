import React, { FC } from 'react';
import './App.css';

const App: FC<{}> = () => {

  const bmi: (weight: number, height: number, printable?: boolean) => number | string = (weight, height, printable) => {
    const bmi = weight / (height * height)
    if (printable) {
      console.log({ bmi })
      return bmi
    } else {
      return 'permissoin denied'
    }

  }

  const nextYearSarary = (currentSalary: number, rate: number = 1.1) => {
    return currentSalary * rate
  }

  console.log(nextYearSarary(1000))

  return (
    <div className="App">
      <h1>
        {bmi(80, 1.8, true)}
      </h1>
    </div>
  );
}


export default App;
