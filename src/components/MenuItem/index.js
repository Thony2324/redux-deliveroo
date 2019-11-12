import React from "react";
// import PropTypes from "prop-types";
import { formatPrice } from "../../utils";

const found_item_in_cart = (itemId, cart) => {
  // for (var i = 0; i < cart.length; i++) {
  //   if (cart[i].id === itemId) {
  //     return true;
  //   }
  // }
  return false;
};

const MenuItem = ({ item, cart, onClickItem }) => {
  return (
    <div className="MenuItem" onClick={onClickItem}>
      <div
        className={
          "MenuItem--card " +
          (found_item_in_cart(item.id, cart) ? "selectedItem" : "")
        }
      >
        <div className="MenuItem--texts">
          <h3>{item.title}</h3>
          {item.description ? <p>{item.description}</p> : ""}
          <div className="MenuItem--infos">
            <span className="MenuItem--price">{formatPrice(item.price)}</span>
            {item.popular ? (
              <span className="MenuItem--popular">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#ff8000"
                  className="feather feather-star"
                  style={{ width: "20px", height: "20px", marginRight: "5px" }}
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
                Populaire
              </span>
            ) : (
              ""
            )}
          </div>
        </div>
        {item.picture ? (
          <div className="MenuItem--picture">
            <img src={item.picture} alt={item.title} />
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

// MenuItem.propTypes = {
//   item: PropTypes.object.isRequired,
//   cart: PropTypes.array.isRequired,
//   onClickItem: PropTypes.func.isRequired
// };

export default MenuItem;
