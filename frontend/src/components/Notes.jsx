import React from "react";

const Notes = ({
  overlocks,
  setOverlocks,
  reverseOverlocks,
  setReverseOverlocks,
  cleans,
  setCleans,
  toDoList,
  setToDoList,
  otherNotes,
  setOtherNotes,
}) => {
  const handleInputChange = (index, setter) => (event) => {
    setter((prev) => {
      const copy = [...prev];
      copy[index] = event.target.value;
      return copy;
    });
  };

  return (
    <div>
      <div className="form-group">
        <label>Overlocks:</label>
        {overlocks.map((value, index) => (
          <input
            key={index}
            name={`overlock${index}`}
            value={value}
            onChange={handleInputChange(index, setOverlocks)}
          />
        ))}
      </div>
      <div className="form-group">
        <label>Reverse Overlocks:</label>
        {reverseOverlocks.map((value, index) => (
          <input
            key={index}
            name={`reverseOverlock${index}`}
            value={value}
            onChange={handleInputChange(index, setReverseOverlocks)}
          />
        ))}
      </div>
      <div className="form-group">
        <label>Cleans:</label>
        {cleans.map((value, index) => (
          <input
            key={index}
            name={`clean${index}`}
            value={value}
            onChange={handleInputChange(index, setCleans)}
          />
        ))}
      </div>
      <div className="form-group">
        <label>To Do List:</label>
        {toDoList.map((value, index) => (
          <input
            key={index}
            name={`toDoList${index}`}
            value={value}
            onChange={handleInputChange(index, setToDoList)}
          />
        ))}
      </div>
      <div className="form-group">
        <label>Other Notes:</label>
        {otherNotes.map((value, index) => (
          <input
            key={index}
            name={`otherNotes${index}`}
            value={value}
            onChange={handleInputChange(index, setOtherNotes)}
          />
        ))}
      </div>
    </div>
  );
};

export default Notes;
