import React from "react";
import { connect } from "react-redux";
import { fetchApiDeliveroo, addToCart, incrementQuantity, decrementQuantity } from "../actions";
import Loader from "./Loader";
import Header from "./Header";
import Menu from "./Menu";
import Cart from "./Cart";

const mapStateToProps = state => {
  return {
    deliveroo: state.deliveroo,
    panier: state.panier
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getDeliveroo: () => fetchApiDeliveroo(dispatch), // renvoie une fonction
    handleAddToCart: item => addToCart(item, dispatch),
    handleIncrementQuantity: item => incrementQuantity(item, dispatch),
    handleDecrementQuantity: item => decrementQuantity(item, dispatch)
  };
};

class App extends React.Component {
  componentDidMount() {
    // Call API
    this.props.getDeliveroo();
  }

  render() {
    // IF DATA NULL OR LOADING
    if (this.props.deliveroo.data === null || this.props.deliveroo.isLoading) {
      return <Loader />;
    }
    // ELSE DESTRUCTURE THE PROPS AND RENDER THE APP
    const { name, description, picture } = this.props.deliveroo.data.restaurant;

    return (
      <div className="App">
        <Header resto_name={name} resto_description={description} resto_picture={picture} />
        <div className="Content">
          <div className="Content--center">
            <Menu menu={this.props.deliveroo.data.menu} props={this.props} />
            <Cart panier={this.props.panier} props={this.props} />
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
