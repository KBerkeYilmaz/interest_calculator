import { useState } from "react";

const App = () => {
  const [rateIndex, setRateIndex] = useState([]);
  const [currentSavings, setCurrentSavings] = useState("");
  const [yearlySavings, setYearlySavings] = useState("");
  const [expectedInterest, setxpectedInterest] = useState("");
  const [investmentDuration, setInvestmentDuration] = useState("");

  const calculateReturn = (capital, yearlysavings, interest) => {
    const yearlyInterest = (capital / 100) * interest;
    const yearlyReturn = capital + yearlyInterest + yearlysavings;
  };



  const handleCurrenSavings = (e) => {
    const value = Number(e.target.value);
    setCurrentSavings(value);
  };
  const handleYearlySavings = (e) => {
    const value = Number(e.target.value);
    setYearlySavings(value);
  };
  const handleExpectedInterest = (e) => {
    const value = Number(e.target.value);
    setxpectedInterest(value);
  };
  const handleInvestmentDuration = (e) => {
    const value = Number(e.target.value);
    setInvestmentDuration(value);
  };

  const interestInformation = [
    currentSavings,
    yearlySavings,
    expectedInterest,
    investmentDuration,
  ];

  const handleReset = () => {
    setCurrentSavings("");
    setYearlySavings("");
    setxpectedInterest("");
    setInvestmentDuration("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(interestInformation);
    calculateReturn(
      currentSavings,
      yearlySavings,
      expectedInterest,
      investmentDuration
    );
    handleReset();
  };

  return (
    <div className="w-screen min-h-screen h-fit flex flex-col justify-start items-center bg-gradient-radial from-slate-600 via-gray-800 to-black">
      <div className="text-white p-10 flex flex-col justify-center items-center gap-5">
        <img
          src="/assets/bank.png"
          alt=""
          className="w-32"
        />
        <h1 className="text-4xl">Investment Calculator</h1>
      </div>
      <form
        action=""
        onSubmit={handleSubmit}
        className="w-1/3 bg-gradient-to-b from-emerald-600 to-emerald-500 rounded-md flex flex-col justify-start items-center "
      >
        <div className="grid grid-cols-2 p-10 text-white gap-5 mt-5">
          <div>
            <label htmlFor="">Current Savings ($)</label>
            <input
              type="number"
              value={currentSavings}
              onChange={handleCurrenSavings}
              className="text-black"
            />
          </div>
          <div>
            <label htmlFor="">Yearly Savings ($)</label>
            <input
              type="number"
              value={yearlySavings}
              onChange={handleYearlySavings}
              className="text-black"
            />
          </div>
          <div>
            <label htmlFor="">Expected Interest (%)</label>
            <input
              type="number"
              value={expectedInterest}
              onChange={handleExpectedInterest}
              className="text-black"
            />
          </div>
          <div>
            <label htmlFor="">Investment Duration</label>
            <input
              type="number"
              value={investmentDuration}
              onChange={handleInvestmentDuration}
              className="text-black"
            />
          </div>
        </div>
        <div className="flex justify-center items-center gap-20 w-3/4 mb-5">
          <button
            type="reset"
            className="w-32 h-10 rounded-md border-solid border-transparent border-2 hover:border-white text-white"
            onClick={handleReset}
          >
            Reset
          </button>
          <button
            className="bg-green-700 w-32 h-10 rounded-md text-white"
            type="submit"
          >
            Calculate
          </button>
        </div>
      </form>
    </div>
  );
};

export default App;
