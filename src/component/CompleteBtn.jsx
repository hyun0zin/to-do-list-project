import React from "react";

const CompleteBtn = ({ card, updateCard, children }) => {
  return (
    <button
      id="completeBtn"
      type="button"
      className="btn btn-success"
      onClick={() => updateCard(card.id)} //id 어떻게 받아오지?
    >
      {children}
    </button>
  );
};

export default CompleteBtn;
