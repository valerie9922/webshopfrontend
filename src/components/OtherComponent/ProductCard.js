import { AiFillCheckSquare, AiFillStar, AiOutlineStar } from "react-icons/ai";
import React from "react";

import { useEffect, useState } from "react";
import axios from "axios";
import ProductBlock from "./ProductBlock";
import CategoryBlock from "./CategoryBlock";

const ProductCard = () => {
  const [products, setProducts] = useState(null);
  const [categories, setCategories] = useState(null);

  const getProducts = async () => {
    const result = await axios.get("http://localhost:4000/products");
    console.log("Products are here", result.data);
    return setProducts(result.data);
  };
  const getCategories = async () => {
    const response = await axios.get("http://localhost:4000/categories");
    console.log("Categories are here", response.data);
    return setCategories(response.data);
  };
  useEffect(() => {
    getProducts();
    getCategories();
  }, []);

  return (
    <div className="container m-4">
      <div className="row">
        <div className="product_shop">
          <div className="col-3">
            <h4>Categories</h4>
            <ul>
              {categories ? (
                categories.map((category, index) => (
                  <CategoryBlock key={index} title={category.title} />
                ))
              ) : (
                <p>Loading..</p>
              )}
            </ul>
            <h4>Rating Item</h4>
            <ul>
              <li>
                <span className="gold">
                  <AiFillStar />
                </span>
                <span className="gold">
                  <AiFillStar />
                </span>
                <span className="gold">
                  <AiFillStar />
                </span>
                <span className="gold">
                  <AiFillStar />
                </span>
                <span className="gold">
                  <AiFillStar />
                </span>
                (2341)
              </li>
              <li>
                <span className="gold">
                  <AiFillStar />
                </span>
                <span className="gold">
                  <AiFillStar />
                </span>
                <span className="gold">
                  <AiFillStar />
                </span>
                <span className="gold">
                  <AiOutlineStar />
                </span>
                (1726)
              </li>
              <li>
                <span className="gold">
                  <AiFillStar />
                </span>
                <span className="gold">
                  <AiFillStar />
                </span>
                <span className="gold">
                  <AiFillStar />
                </span>
                <span className="gold">
                  <AiOutlineStar />
                </span>
                <span className="gold">
                  <AiOutlineStar />
                </span>
                (286)
              </li>
              <li>
                <span className="gold">
                  <AiFillStar />
                </span>
                <span className="gold">
                  <AiFillStar />
                </span>
                <span className="gold">
                  <AiOutlineStar />
                </span>
                <span className="gold">
                  <AiOutlineStar />
                </span>
                <span className="gold">
                  <AiOutlineStar />
                </span>
                (110)
              </li>
            </ul>
            <h4>Price Filter</h4>
            <ul>
              <li>
                <span className="pink">
                  <AiFillCheckSquare />
                </span>
                €0- €2500
              </li>
              <li>
                {" "}
                <span className="pink">
                  <AiFillCheckSquare />
                </span>
                €2500 - €5000
              </li>
              <li>
                {" "}
                <span className="pink">
                  <AiFillCheckSquare />
                </span>
                €5000 - €7500
              </li>
            </ul>
          </div>
          <div className="col-9 ">
            {products ? (
              products.map((item, index) => (
                <ProductBlock
                  key={index}
                  title={item.title.substring(0, 40) + " ..."}
                  price={item.price}
                  image={item.mainImage}
                  description={item.description.substring(0, 100) + " ..."}
                  rating={item.rating}
                />
              ))
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export { ProductCard };
