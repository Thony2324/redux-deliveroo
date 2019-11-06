import React from "react";
import { formatPrice } from "../../utils";

const CartItem = ({ item, onDecrement, onIncrement }) => {
  return (
    <div className="Cart--line">
      <div className="Cart--counter">
        <span onClick={onDecrement}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-plus-circle"
            style={{
              width: "20px",
              height: "20px",
              cursor: "pointer",
              color: "rgb(0, 206, 189)"
            }}>
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="8" y1="12" x2="16" y2="12"></line>
          </svg>
        </span>
        <span>{item.quantity}</span>
        <span onClick={onIncrement}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-plus-circle"
            style={{
              width: "20px",
              height: "20px",
              cursor: "pointer",
              color: "rgb(0, 206, 189)"
            }}>
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="8" x2="12" y2="16"></line>
            <line x1="8" y1="12" x2="16" y2="12"></line>
          </svg>
        </span>
      </div>
      <span className="Cart--item-name">{item.title}</span>
      <span className="Cart--amount">{formatPrice(item.price)}</span>
    </div>
  );
};

export default CartItem;
