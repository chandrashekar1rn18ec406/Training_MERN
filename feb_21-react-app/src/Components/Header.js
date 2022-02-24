import { Component } from "react";
import { BsFillBasket2Fill } from "react-icons/bs";
import { FaLeaf } from "react-icons/fa";
import { connect } from "react-redux";
import { BsPlusSquare } from "react-icons/bs";
import { BsTrash } from "react-icons/bs";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { searchInput: "" };
  }
  // onChange function declaring
  onInputChange = (event) => {
    this.setState({ searchInput: event.target.value });
  };

  //onItemclick function
  onItemClick = (item) => {
    this.props.itemClickAction(item);
  };

  //onDelete function
  onDelete = (event) => {
    this.props.deleteAction();
  };

  //onBasketItemClick
  onBasketItemClick = (id) => {
    this.props.basketItemClickAction(id);
  };

  //onALLClick function
  onAllClick = () => {
    this.props.allClick();
  };

  //ONPENDING FUNCTIONS
  onPendingClick = () => {
    this.props.pendingClick();
  };

  //purchased function
  onPurchasedClick = () => {
    this.props.purchasedClick();
  };

  render() {
    // declared filteredGroceryList
    const filteredGroceryList = this.props.groceryList.filter((eachGrocery) =>
      eachGrocery.name.includes(this.state.searchInput)
    );
    let modifiedBasketList = [];
    if (this.props.pending) {
      modifiedBasketList = this.props.basketList.filter(
        (eachItem) => eachItem.isChecked === false
      );
    } else if (this.props.purchased) {
      modifiedBasketList = this.props.basketList.filter(
        (eachItem) => eachItem.isChecked === true
      );
    } else {
      modifiedBasketList = this.props.basketList;
    }
    //return
    return (
      <div className="app-container">
        <nav className="nav-container">
          <div className="nav-card">
            <div className="basket-container">
              <BsFillBasket2Fill
                size={140}
                height={130}
                color="#fff"
                className="pl-2"
              />
            </div>
            <h1 className="main-heading">Hello,Basket</h1>
          </div>
        </nav>
        <div className="search-container">
          <input type="text" placeholder="Search Grocery item" />
        </div>
        <div className="grocery-basket-container">
          <div className="grocery-conatiner">
            <div className="leaf-grocery-card">
              <FaLeaf className="leaf-icon" />
              <h1 className="grocery-heading">Groceries</h1>
            </div>
            <ul className="grocery-items-card">
              {!this.props.purchased &&
                filteredGroceryList.map((eachGrocery) => (
                  <div className="Parent">
                    <li
                      key={eachGrocery.id}
                      className="grocery-item"
                      onClick={() => {
                        this.onItemClick(eachGrocery);
                      }}
                    >
                      <div className="plus-icon-container">
                        <BsPlusSquare
                          size={15}
                          color="#fff"
                          className="plus-icon Show"
                        />
                      </div>
                      <p className="grocery-name">{eachGrocery.name}</p>
                    </li>
                  </div>
                ))}
            </ul>
          </div>
          <div className="basket-conatiner">
            <div className="basket-delete-card">
              <div className="basket-card">
                <BsFillBasket2Fill
                  size={20}
                  height={100}
                  color="black"
                  className="leaf-icon"
                />
                <h1 className="grocery-heading">Basket</h1>
              </div>
              <div onClick={this.onDelete}>
                <BsTrash color="red" />
              </div>
            </div>
            <ul className="basket-items-card">
              {modifiedBasketList.length === 0 ? (
                <li className="grocery-item">
                  <p>Your Basket is Empty!</p>
                </li>
              ) : (
                modifiedBasketList.map((eachBasket) => (
                  <li
                    className="basket-item"
                    key={eachBasket.id}
                    onClick={() => {
                      this.onBasketItemClick(eachBasket.id);
                    }}
                  >
                    <p className={eachBasket.isChecked && "checked"}>
                      {eachBasket.number}
                      {eachBasket.name}
                    </p>
                  </li>
                ))
              )}
            </ul>
          </div>
        </div>
        <footer className="footer-container">
          <div className="footer-card">
            <p className={this.props.all ? "footer-links" : "underline"}>
              {" "}
              All,
            </p>
            <p
              className={this.props.pending ? "footer-links" : "underline"}
              onClick={this.onPendingClick}
              footer-links
            >
              Pending,
            </p>
            <p
              className={this.props.pending ? "footer-links" : "underline"}
              onClick={this.onPurchasedClick}
            >
              Purchased
            </p>
          </div>
        </footer>
      </div>
    );
  }
}

const mapStateProps = (state) => {
  return {
    groceryList: state.groceryList,
    basketList: state.basketList,
    all: state.all,
    pending: state.pending,
    purchased: state.purchased,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    inputChangeLocal: (input) => dispatch({ type: "input", payload: input }),
    itemClickAction: (item) => dispatch({ type: "itemclick", payload: item }),
    deleteAction: () => dispatch({ type: "delete" }),
    basketItemClickAction: (id) =>
      dispatch({
        type: "basketitemclick",
        payload: id,
      }),
    allClick: () => dispatch({ type: "allClick" }),
    pendingClick: () => dispatch({ type: "pendingClick" }),
    purchasedClick: () => dispatch({ type: "purchasedclick" }),
  };
};

const CONNECT = connect(mapStateProps, mapDispatchToProps)(Header);
export default CONNECT;
