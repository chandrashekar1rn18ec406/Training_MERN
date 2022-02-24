import React from "react";

const Product = () => {
  return (
    <div>
      <div>
        <form action="">
          <h1>Product Details</h1>
          <label htmlFor="">
            Product Name: <input type="text" />
          </label>{" "}
          <br />
          <br />
          <label htmlFor="">
            Price: <input type="text" />
          </label>{" "}
          <br />
          <br />
          <label htmlFor="">
            Offer Amount: <input type="text" />
          </label>{" "}
          <br />
          <br />
          <label htmlFor="">
            Final Price: <input type="text" />
          </label>{" "}
          <br />
          <br />
          <label htmlFor="">
            Seller Name: <input type="text" />
          </label>{" "}
          <br />
          <br />
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Product;
