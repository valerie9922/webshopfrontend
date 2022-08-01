import { AiFillCheckSquare, AiFillStar, AiOutlineStar } from "react-icons/ai";
import React from "react";
// import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import ProductBlock from "./ProductBlock";
import CategoryBlock from "./CategoryBlock";
import Pagination from "./Pagination";

const ProductCard = ({ id }, props) => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState(null);

  const handCategory = (categoryIds) => {
    const selectedProducts = products.filter(
      (product) => product.categoryId === parseInt(categoryIds)
      // categoryIds.includes(product.categoryId)
    );
    setCategories(categories);
    setProducts(selectedProducts);
    // setProducts({ ...selectedCategory, id });
    console.log("Selected Category Id: ", selectedProducts);
  };

  const getProducts = async (id) => {
    let url = "http://localhost:4000/products/";
    if (id) {
      url += "category/" + id;
    }
    const result = await axios.get(url);
    // console.log("Products are here", result.data);
    return setProducts(result.data);
  };
  const getCategories = async () => {
    const response = await axios.get("http://localhost:4000/categories");
    // console.log("Categories are here", response.data);
    return setCategories(response.data);
  };

  useEffect(() => {
    getProducts();
    getCategories();
  }, []);
  //Get current products
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(5);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <div className="container m-4">
      <div className="row">
        <div className="product_shop">
          <div className="col-3">
            <h4>Categories</h4>
            <ul>
              {categories ? (
                categories.map((category, index) => (
                  <CategoryBlock
                    key={index}
                    id={category.id}
                    title={category.title}
                    handCategory={handCategory}
                  />
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
            {currentProducts ? (
              currentProducts.map((item) => (
                // <Link to={`/products/${item.id}`}>
                <ProductBlock
                  key={item.id}
                  id={item.id}
                  categoryId={item.categoryId}
                  title={item.title.substring(0, 40) + " ..."}
                  price={item.price}
                  image={item.mainImage}
                  description={item.description.substring(0, 100) + " ..."}
                  rating={item.rating}
                />
                // </Link>
              ))
            ) : (
              <p>Loading...</p>
            )}
          </div>
          <div className="col-12">
            <Pagination
              productsPerPage={productsPerPage}
              totalProducts={products.length}
              paginate={paginate}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export { ProductCard };
