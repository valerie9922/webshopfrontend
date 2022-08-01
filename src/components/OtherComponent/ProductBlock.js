import {
  AiFillStar,
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineUser,
} from "react-icons/ai";
import { Link } from "react-router-dom";

const ProductBlock = ({
  title,
  price,
  description,
  rating,
  image,
  id,
  categoryId,
}) => {
  return (
    <div className="product_card">
      <div className="image">
        <Link to={`/products/${id}`}>
          <div>
            <img className="image_add" src={image} alt={`Product Image`} />
          </div>
        </Link>
      </div>
      <div className="desc">
        <Link to={`/products/${id}`}>
          <div className="title">{title}</div>
        </Link>
        <div className="price_rate">
          <p className="price">€ {price}</p>
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
              {rating}
            </li>
          </ul>
        </div>
        <div className="description">
          <p className="desc">{description}</p>
        </div>
        <div className="icons">
          <span className="blue">
            <AiOutlineShoppingCart />
          </span>
          <span className="blue">
            <AiOutlineHeart />
          </span>
          <span className="blue">
            <AiOutlineUser />
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductBlock;
