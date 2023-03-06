import React from "react";
import { calcTotalPrice } from "../../utils";

function TwoCartItems({ items }) {
  return (
    <span>
      {items.length} товарів на суму {calcTotalPrice(items)} грн
    </span>
  );
}

export default TwoCartItems;
