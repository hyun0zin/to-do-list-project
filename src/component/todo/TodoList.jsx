import TodoCards from "./TodoCards";

const TodoList = ({ cards, subTitle, removeCardBtn, updateCardBtn }) => {
  return (
    <section className="card-section">
      <h2>{subTitle}</h2>
      <ul className="card-container">
        {cards.map(function (todo) {
          return (
            <TodoCards
              key={todo.id}
              item={todo}
              removeCardBtn={removeCardBtn}
              updateCardBtn={updateCardBtn}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default TodoList;
