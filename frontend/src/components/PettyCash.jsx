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
    const newTotalPettyCash = newCurrentTotal + Number(receipts);
    setCurrentTotal(newTotalPettyCash.toFixed(2));
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
      <h2 className="pettyCashTitle">Petty Cash</h2>
      <div className="pettyCash">
        {/* Denominations */}
        <div className="cashInputs">
          <label htmlFor="pennies">Pennies: </label>
          <input
            type="number"
            name="pennies"
            id="pennies"
            value={pennies}
            onChange={(e) => setPennies(e.target.value)}
          />
        </div>

        <div className="cashInputs">
          <label htmlFor="nickels">Nickels: </label>
          <input
            type="number"
            name="nickels"
            id="nickels"
            value={nickels}
            onChange={(e) => setNickels(e.target.value)}
          />
        </div>

        <div className="cashInputs">
          <label htmlFor="dimes">Dimes: </label>
          <input
            type="number"
            name="dimes"
            id="dimes"
            value={dimes}
            onChange={(e) => setDimes(e.target.value)}
          />
        </div>

        <div className="cashInputs">
          <label htmlFor="quarters">Quarters:</label>
          <input
            type="number"
            name="quarters"
            id="quarters"
            value={quarters}
            onChange={(e) => setQuarters(e.target.value)}
          />
        </div>

        <div className="cashInputs">
          <label htmlFor="ones">Ones:</label>
          <input
            type="number"
            name="ones"
            id="ones"
            value={ones}
            onChange={(e) => setOnes(e.target.value)}
          />
        </div>

        <div className="cashInputs">
          <label htmlFor="fives">Fives:</label>
          <input
            type="number"
            name="fives"
            id="fives"
            value={fives}
            onChange={(e) => setFives(e.target.value)}
          />
        </div>

        <div className="cashInputs">
          <label htmlFor="tens">Tens:</label>
          <input
            type="number"
            name="tens"
            id="tens"
            value={tens}
            onChange={(e) => setTens(e.target.value)}
          />
        </div>

        <div className="cashInputs">
          <label htmlFor="twenties">Twenties:</label>
          <input
            type="number"
            name="twenties"
            id="twenties"
            value={twenties}
            onChange={(e) => setTwenties(e.target.value)}
          />
        </div>

        <div className="cashInputs">
          <label htmlFor="fifties">Fifties: </label>
          <input
            type="number"
            name="fifties"
            id="fifties"
            value={fifties}
            onChange={(e) => setFifties(e.target.value)}
          />
        </div>

        <div className="cashInputs">
          <label htmlFor="hundreds">Hundreds: </label>
          <input
            type="number"
            name="hundreds"
            id="hundreds"
            value={hundreds}
            onChange={(e) => setHundreds(e.target.value)}
          />
        </div>

        {/* Receipts */}
        <div className="cashInputs">
          <label htmlFor="receipts">Receipts: </label>
          <input
            type="number"
            name="receipts"
            id="receipts"
            value={receipts}
            onChange={(e) => setReceipts(e.target.value)}
          />
        </div>

        {/* Current total */}
        <div className="cashInputs">
          <label htmlFor="currentTotal">Current Total: </label>
          <input
            type="number"
            name="currentTotal"
            id="currentTotal"
            value={currentTotal}
          />
        </div>

        {/* Total Petty Cash */}
        <div className="cashInputs">
          <label htmlFor="totalPettyCash">Total Petty Cash: </label>
          <input
            type="number"
            name="totalPettyCash"
            id="totalPettyCash"
            value={totalPettyCash}
            onChange={(e) => setTotalPettyCash(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default PettyCash;
