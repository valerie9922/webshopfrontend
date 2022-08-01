import React from "react";

const Pagination = ({ productsPerPage, totalProducts, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination_list">
        {pageNumbers.map((number) => {
          return (
            <li key={number} className="pagination_list_item">
              <a href="#!" onClick={() => paginate(number)}>
                {number}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Pagination;
