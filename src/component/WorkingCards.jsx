import CompleteBtn from "./CompleteBtn";

const WorkingCards = ({ cards, removeCardBtn }) => {
  return (
    <div>
      <h2>Working..🔥</h2>
      <div className="workingCards">
        {cards.map(function (item) {
          if (item.isDone === false) {
            return (
              <div key={item.id} className="cardList">
                <h2>{item.title}</h2>
                <p>{item.text}</p>
                <button
                  id="removeBtn"
                  type="button"
                  className="btn btn-danger"
                  onClick={() => removeCardBtn(item.id)}
                >
                  Delete
                </button>
                &nbsp;
                <CompleteBtn>Done</CompleteBtn>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default WorkingCards;
