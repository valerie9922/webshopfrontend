import { AiFillCheckSquare } from "react-icons/ai";
// import { ProductCard } from "./ProductCard";
const CategoryBlock = (props) => {
  const onAddClick = (e) => {
    e.preventDefault();
    props.handCategory(props.id);
    e.currentTarget.style.color = "tomato";
    e.target.getAttribute(props.id);
    // console.log(" props_id", props.id);
  };

  return (
    <div>
      <li
        className="categoryItems"
        onClick={onAddClick}
        style={{ cursor: "pointer" }}
      >
        <span className="pink">
          <AiFillCheckSquare />
        </span>
        {props.title}
      </li>
    </div>
  );
};

export default CategoryBlock;
