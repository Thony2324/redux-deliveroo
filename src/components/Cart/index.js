import React from "react";
import { formatPrice } from "../../utils";
import { SHIPPING_COST } from "../../constants";
import CartItem from "../CartItem";

const Cart = ({ panier, props }) => {
  return (
    <div className="Cart">
      <div className="Cart--card">
        {panier.cart.length === 0 ? (
          <React.Fragment>
            <button className="Cart--validate Cart--disabled">Valider mon panier</button>
            <div className="Cart--empty">Votre panier est vide</div>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <button className="Cart--validate">Valider mon panier</button>
            <div>
              <div className="Cart--items">
                {panier.cart.map(item => {
                  return (
                    <CartItem
                      key={item.id}
                      item={item}
                      onDecrement={() => props.handleDecrementQuantity(item)}
                      onIncrement={() => props.handleIncrementQuantity(item)}
                    />
                  );
                })}
              </div>
              <div className="Cart--results">
                <div className="Cart--result-line">
                  <span className="Cart--result-name">Sous-total</span>
                  <span className="Cart--amount">{formatPrice(panier.subTotal)}</span>
                </div>
                <div className="Cart--result-line">
                  <span className="Cart--result-name">Frais de livraison</span>
                  <span>{formatPrice(SHIPPING_COST)}</span>
                </div>
              </div>
              <div className="Cart--total">
                <span className="Cart--result-name">Total</span>
                <span className="Cart--amount">{formatPrice(panier.total)}</span>
              </div>
            </div>
          </React.Fragment>
        )}
      </div>
    </div>
  );
};

export default Cart;
