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

  const reducer = (accumulator: number, currentValue: number): number => accumulator + currentValue;

  const sum: (...values: number[]) => number = (...values: number[]): number => {
    const sum = values.reduce(reducer)
    console.log(sum)
    return sum
  }

  sum(1, 2, 3, 4)

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
