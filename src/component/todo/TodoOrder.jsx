import React from "react";

function TodoOrder({
  order,
  changeDateUpOrderHandler,
  changeDateDownOrderHandler,
}) {
  return (
    <form className="order-radio">
      <label>
        <input
          type="radio"
          name="option"
          value={order}
          onChange={changeDateUpOrderHandler}
        />
        &nbsp; 마감 빠른순
      </label>
      <label>
        <input
          type="radio"
          name="option"
          value={order}
          onChange={changeDateDownOrderHandler}
        />
        &nbsp; 마감 느린순
      </label>
    </form>
  );
}

export default TodoOrder;
