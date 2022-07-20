import { NavLink } from "react-router-dom";
const DetailsPage = ({ id }) => {
  return (
    <div>
      <NavLink to={`/details/${id}`}>{id}</NavLink>
    </div>
  );
};

// export default DetailsPage;

export { DetailsPage };
