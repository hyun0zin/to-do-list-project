import TodoCards from "component/todo/TodoCards";
import { CardContext } from "context/CardContext";
import { useContext } from "react";
import { useParams } from "react-router-dom";

function DetailPage() {
  const params = useParams();
  const { cards } = useContext(CardContext);
  console.log(cards[0].id);
  console.log(params.id);
  console.log(cards);

  const todo = cards.find((todo) => todo.id === params.id);
  // console.log(todo);

  return (
    <>
      <TodoCards todo={todo} />
    </>
  );
}

export default DetailPage;
