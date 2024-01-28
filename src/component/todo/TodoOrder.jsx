import React from "react";

function TodoOrder({ order, changeDateOrderHandler }) {
  return (
    <form className="order-radio">
      <label>
        <input
          type="radio"
          name="option"
          value={order}
          onChange={changeDateOrderHandler}
        />
        &nbsp; 마감 빠른순
      </label>
      <label>
        <input type="radio" name="option" />
        &nbsp; 마감 느린순
      </label>
    </form>
  );
}

export default TodoOrder;
