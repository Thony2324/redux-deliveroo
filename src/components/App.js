import React from "react";
import { connect } from "react-redux";
import {
  fetchApiDeliveroo,
  incrementQuantity,
  decrementQuantity
} from "../actions";
import Loader from "./Loader";
import Header from "./Header";
import Menu from "./Menu";
import Cart from "./Cart";
import {
  computeCartTotal,
  getCartDetails
} from "../store/reducers/panierReducer";

export const mapStateToProps = state => {
  return {
    deliveroo: state.deliveroo,
    panier: state.panier
  };
};

export const mapDispatchToProps = dispatch => {
  return {
    getDeliveroo: () => fetchApiDeliveroo(dispatch), // renvoie une fonction
    handleIncrementQuantity: id => dispatch(incrementQuantity(id)),
    handleDecrementQuantity: id => dispatch(decrementQuantity(id))
  };
};

export class App extends React.Component {
  componentDidMount() {
    // Call API
    this.props.getDeliveroo();
  }

  render() {
    const cartDetails = getCartDetails(this.props.panier, this.props.deliveroo);
    const cartTotal = computeCartTotal(cartDetails);

    // IF DATA NULL OR LOADING
    if (this.props.deliveroo.data === null || this.props.deliveroo.isLoading) {
      return <Loader />;
    }
    // ELSE DESTRUCTURE THE PROPS AND RENDER THE APP
    const { name, description, picture } = this.props.deliveroo.data.restaurant;

    return (
      <div className="App">
        <Header
          resto_name={name}
          resto_description={description}
          resto_picture={picture}
        />
        <div className="Content">
          <div className="Content--center">
            <Menu menu={this.props.deliveroo.data.menu} props={this.props} />
            <Cart
              panier={cartDetails}
              cartTotal={cartTotal}
              handleIncrementQuantity={this.props.handleIncrementQuantity}
              handleDecrementQuantity={this.props.handleDecrementQuantity}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
