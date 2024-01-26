import TodoCards from "./TodoCards";

const TodoList = ({ cards, subTitle, removeCardBtn, updateCardBtn }) => {
  return (
    <section className="card-section">
      <h2>{subTitle}</h2>
      <ul className="card-container">
        {cards.map(function (item) {
          return (
            <li className="card-list">
              <TodoCards
                key={item.id}
                item={item}
                removeCardBtn={removeCardBtn}
                updateCardBtn={updateCardBtn}
              />
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default TodoList;
