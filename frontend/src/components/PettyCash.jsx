import React, { useEffect } from "react";

const PettyCash = ({
  pennies,
  setPennies,
  nickels,
  setNickels,
  dimes,
  setDimes,
  quarters,
  setQuarters,
  ones,
  setOnes,
  fives,
  setFives,
  tens,
  setTens,
  twenties,
  setTwenties,
  fifties,
  setFifties,
  hundreds,
  setHundreds,
  currentTotal,
  setCurrentTotal,
  receipts,
  setReceipts,
  totalPettyCash,
  setTotalPettyCash,
}) => {
  useEffect(() => {
    // Compute current total
    const newCurrentTotal =
      pennies * 0.01 +
      nickels * 0.05 +
      dimes * 0.1 +
      quarters * 0.25 +
      ones * 1 +
      fives * 5 +
      tens * 10 +
      twenties * 20 +
      fifties * 50 +
      hundreds * 100;
    setCurrentTotal(newCurrentTotal);

    // Compute total petty cash
    const newTotalPettyCash = newCurrentTotal + receipts;
    setTotalPettyCash(newTotalPettyCash);
  }, [
    pennies,
    nickels,
    dimes,
    quarters,
    ones,
    fives,
    tens,
    twenties,
    fifties,
    hundreds,
    receipts,
  ]);

  return (
    <div>
      {/* Denominations */}
      <label>Pennies:</label>
      <input
        type="number"
        value={pennies}
        onChange={(e) => setPennies(e.target.value)}
      />

      <label>Nickels:</label>
      <input
        type="number"
        value={nickels}
        onChange={(e) => setNickels(e.target.value)}
      />

      <label>Dimes:</label>
      <input
        type="number"
        value={dimes}
        onChange={(e) => setDimes(e.target.value)}
      />

      <label>Quarters:</label>
      <input
        type="number"
        value={quarters}
        onChange={(e) => setQuarters(e.target.value)}
      />

      <label>Ones:</label>
      <input
        type="number"
        value={ones}
        onChange={(e) => setOnes(e.target.value)}
      />

      <label>Fives:</label>
      <input
        type="number"
        value={fives}
        onChange={(e) => setFives(e.target.value)}
      />

      <label>Tens:</label>
      <input
        type="number"
        value={tens}
        onChange={(e) => setTens(e.target.value)}
      />

      <label>Twenties:</label>
      <input
        type="number"
        value={twenties}
        onChange={(e) => setTwenties(e.target.value)}
      />

      <label>Fifties:</label>
      <input
        type="number"
        value={fifties}
        onChange={(e) => setFifties(e.target.value)}
      />

      <label>Hundreds:</label>
      <input
        type="number"
        value={hundreds}
        onChange={(e) => setHundreds(e.target.value)}
      />

      {/* Current total */}
      <label>Current Total:</label>
      <input type="number" value={currentTotal} readOnly />

      {/* Receipts */}
      <label>Receipts:</label>
      <input
        type="number"
        value={receipts}
        onChange={(e) => setReceipts(e.target.value)}
      />

      {/* Total Petty Cash */}
      <label>Total Petty Cash:</label>
      <input
        type="number"
        value={totalPettyCash}
        onChange={(e) => setTotalPettyCash(e.target.value)}
      />
    </div>
  );
};

export default PettyCash;
