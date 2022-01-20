import React from "react";

const Pagination = () => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination">
      {pageNumbers.map((page) => (
        <li key={page}>
          <button
            style={{
              backgroundColor: page === currentPage ? "red" : "gray",
              color: "white",
              margin: "5px",
            }}
            onClick={() => handlePage(page)}
          >
            {page}
          </button>
        </li>
      ))}
    </div>
  );
};

export default Pagination;
