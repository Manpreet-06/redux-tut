import React from "react";

function Home(props) {
  console.log(props)
  return (
    <div>
      <h1>Home Component</h1>
      <div className="add-to-cart">
        <span className="cart-count">{props?.data?.length}</span>
        <img alt="" src="https://static.vecteezy.com/system/resources/thumbnails/000/496/007/small/Ecommerce_998.jpg" />
      </div>
      <div className="cart-wrapper">
        <div className="img-wrapper item">
          <img alt="" src="https://www.fdfproject.com/wp-content/uploads/2018/12/iphone-png.png" />
        </div>
        <div className="text-wrapper item">
          <span>I-Phone</span>
          <span>Price: $1000.00</span>
        </div>
        <div className="btn-wrapper item">
          <button
            onClick={() => {
              props.addToCartHandler({ price: 1000, name: "i phone 11" });
            }}
          >
            Add To Cart
          </button>
          <button
          className="remove-cart-btn"
            onClick={() => {
              props.removeToCartHandler({});
            }}
          >
            Remove To Cart
          </button>
        </div>
      </div>
    </div>
  );
}
export default Home;
