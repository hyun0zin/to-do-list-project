import CompleteBtn from "./CompleteBtn";

const WorkingCards = ({ cards, removeCardBtn }) => {
  return (
    <div>
      <h2>Working..🔥</h2>
      <div className="workingCards">
        {cards.map(function (item) {
          return (
            <div key={item.id} className="cardList">
              <h2>{item.title}</h2>
              <p>{item.text}</p>
              <button onClick={() => removeCardBtn(item.id)}>삭제하기</button>
              &nbsp;
              <CompleteBtn>완료</CompleteBtn>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WorkingCards;
