import React from "react";

const CompleteBtn = ({ card, updateCard, children }) => {
  return <button onClick={() => updateCard(card.id)}>{children}</button>;
};

export default CompleteBtn;
