import { useEffect, useState } from "react";
import axios from "axios";

import CardBlock from "../../components/OtherComponent/CardBlock";
const ShoppingCard = () => {
  const [products, setProducts] = useState(null);

  const getProducts = async () => {
    const result = await axios.get("http://localhost:4000/products");
    console.log("Products are here", result.data);
    return setProducts(result.data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="card">
      {" "}
      <div className="container">
        <div className="row">
          <div className="pageTitle">
            <h1>Shopping Cart</h1>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="cardDetail">
            <div className="col-9">
              <div className="row">
                <div className="cardDetail_product">
                  <h3>Product</h3>
                </div>
                <div className="cardDetail_price">
                  <h3>Price</h3>
                </div>
                <div className="cardDetail_quantity">
                  <h3>Quantity</h3>
                </div>
                <div className="cardDetail_total">
                  <h3>Total</h3>
                </div>
              </div>
              <div className="row">
                <div className="cardItems">
                  <ul>
                    {products ? (
                      products.map((item, index) => (
                        <CardBlock
                          key={index}
                          image={item.mainImage}
                          title={item.title.substring(0, 20) + " ..."}
                          price={item.price}
                        />
                      ))
                    ) : (
                      <p>Loading..</p>
                    )}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-3 text-center">
              <h3>Cart Totals</h3>
              <div className="cardTotal">
                <div className="card_subtotal">
                  <span>Subtotals :</span>
                  <span>€ 219</span>
                </div>
                <hr></hr>
                <div className="card_total">
                  {" "}
                  <span>Totals :</span>
                  <span>€ 325</span>
                </div>
                <hr></hr>
                <p className="card_check_text">
                  Shipping & taxes calculated at checkout
                </p>
                <button className="btn btn-card">Proceed to Checkout</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCard;
