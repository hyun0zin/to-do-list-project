import CompleteBtn from "./CompleteBtn";

const DoneCards = ({ cards, removeCardBtn }) => {
  return (
    <div>
      <h2>Done🎉</h2>
      <div className="doneCards">
        {cards.map(function (item) {
          return (
            <div key={item.id} className="cardList">
              <h2>{item.title}</h2>
              <p>{item.text}</p>
              <button onClick={() => removeCardBtn(item.id)}>삭제하기</button>
              &nbsp;
              <CompleteBtn>취소</CompleteBtn>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DoneCards;
