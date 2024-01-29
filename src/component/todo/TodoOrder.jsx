import { useState } from "react";

function TodoOrder({ sortCards }) {
  // order 순으로 radio 버튼 누르면 오름차순 정렬
  const changeDateOrderHandler = (e) => {
    const nextSortOrder = e.target.value;
    // console.log(nextSortOrder);

    sortCards(nextSortOrder);
  };

  return (
    <form className="order-radio">
      <label>
        <input
          type="radio"
          name="option"
          value="asc"
          onChange={changeDateOrderHandler}
        />
        &nbsp; 마감 빠른순
      </label>
      <label>
        <input
          type="radio"
          name="option"
          value="desc"
          onChange={changeDateOrderHandler}
        />
        &nbsp; 마감 느린순
      </label>
    </form>
  );
}

export default TodoOrder;