import React from "react";
import { calcTotalPrice } from "../../utils";

function OneCartItems({ items }) {
  return (
    <span>
      {items.length} товар на суму {calcTotalPrice(items)} грн
    </span>
  );
}

export default OneCartItems;
