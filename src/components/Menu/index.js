import React from "react";
// import PropTypes from "prop-types";
import MenuItem from "../MenuItem";

const Menu = ({ menu, props, isEnterprise }) => {
  return (
    <div className="Menu">
      {Object.keys(menu).map(categ => {
        if (menu[categ].length === 0) {
          return null;
        }
        return (
          <React.Fragment key={categ}>
            <div className="MenuItems">
              <h2>{categ}</h2>
              <div className="MenuItems--items">
                {menu[categ].map(item => {
                  return (
                    <MenuItem
                      key={item.id}
                      item={item}
                      onClickItem={() => props.handleIncrementQuantity(item.id)}
                    />
                  );
                })}
              </div>
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
};

// Menu.propTypes = {
//   menu: PropTypes.object.isRequired,
//   props: PropTypes.object.isRequired
// };

export default Menu;
