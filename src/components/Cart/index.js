import React from "react";
// import PropTypes from "prop-types";
import { formatPrice } from "../../utils";
import { SHIPPING_COST, DISCOUNT } from "../../constants";
import CartItem from "../CartItem";

const Cart = ({
  panier,
  cartTotal,
  handleDecrementQuantity,
  handleIncrementQuantity
}) => {
  return (
    <div className="Cart">
      <div className="Cart--card">
        {panier.length === 0 ? (
          <React.Fragment>
            <button className="Cart--validate Cart--disabled">
              Valider mon panier
            </button>
            <div className="Cart--empty">Votre panier est vide</div>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <button className="Cart--validate">Valider mon panier</button>
            <div>
              <div className="Cart--items">
                {panier.map(item => {
                  return (
                    <CartItem
                      key={item.id}
                      quantity={item.quantity}
                      title={item.item.title}
                      price={item.item.price}
                      onDecrement={() => handleDecrementQuantity(item.id)}
                      onIncrement={() => handleIncrementQuantity(item.id)}
                    />
                  );
                })}
              </div>
              <div className="Cart--results">
                <div className="Cart--result-line">
                  <span className="Cart--result-name">Sous-total</span>
                  <span className="Cart--amount">
                    {formatPrice(cartTotal.subTotal)}
                  </span>
                </div>
                {cartTotal.discount > 0 ? (
                  <div className="Cart--result-line reduc-line">
                    <span className="Cart--result-name">
                      Réduction de {DISCOUNT * 100} %
                    </span>
                    <span className="Cart--amount">
                      - {formatPrice(cartTotal.discount)}
                    </span>
                  </div>
                ) : (
                  ""
                )}
                <div className="Cart--result-line">
                  <span className="Cart--result-name">Frais de livraison</span>
                  <span>{formatPrice(SHIPPING_COST)}</span>
                </div>
              </div>
              <div className="Cart--total">
                <span className="Cart--result-name">Total</span>
                <span data-testid="cart-total" className="Cart--amount">
                  {formatPrice(cartTotal.total)}
                </span>
              </div>
            </div>
          </React.Fragment>
        )}
      </div>
    </div>
  );
};

// Cart.propTypes = {
//   panier: PropTypes.object.isRequired,
//   props: PropTypes.object.isRequired
// };

export default Cart;
