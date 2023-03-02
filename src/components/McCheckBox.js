import React from "react";

const McCheckBox = () => {
  return (
    <div>
      <label htmlFor="question">Question... tick the check answer</label>
      <br />
      <textarea
        className="border border-black"
        placeholder="Enter Question Here..."
      />
      <br />
      <input type="checkbox" name="noEndDate" />{" "}
      <input
        type="text"
        placeholder="Enter Question here"
        className="border border-black"
      />
      <br />
      <input type="checkbox" name="noEndDate" />{" "}
      <input
        type="text"
        placeholder="Enter Question here"
        className="border border-black"
      />
      <br />
      <input type="checkbox" name="noEndDate" />{" "}
      <input
        type="text"
        placeholder="Enter Question here"
        className="border border-black"
      />
      <br />
      <input type="checkbox" name="noEndDate" />{" "}
      <input
        type="text"
        placeholder="Enter Question here"
        className="border border-black"
      />
    </div>
  );
};

export default McCheckBox;
