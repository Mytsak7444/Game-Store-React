import React from "react";
import { Link } from "react-router-dom";
import CartBlock from "../CartBlock/CartBlock";
import s from "./header.module.css";

function Header() {
  return (
    <div className={s.header}>
      <div className={s.wrapper}>
        <Link to="/" className={s.header__title}>
          Game Store
        </Link>
      </div>
      <div className={s.wrapper}>
        <div className={s.header__cart__btn__wrapper}>
          <CartBlock />
        </div>
      </div>
    </div>
  );
}

export default Header;
