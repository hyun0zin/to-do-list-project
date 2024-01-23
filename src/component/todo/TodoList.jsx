import TodoCards from "./TodoCards";

const TodoList = ({ cards, subTitle, removeCardBtn, updateCardBtn }) => {
  return (
    <section className="cardSection">
      <h2>{subTitle}</h2>
      <ul className="card-container">
        {cards.map(function (item) {
          return (
            <TodoCards
              key={item.id}
              item={item}
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
