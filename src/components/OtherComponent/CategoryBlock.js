import { AiFillCheckSquare } from "react-icons/ai";
const CategoryBlock = ({ title }) => {
  return (
    <div>
      <li className="categoryItems">
        <span className="pink">
          <AiFillCheckSquare />
        </span>
        {title}
      </li>
    </div>
  );
};

export default CategoryBlock;
