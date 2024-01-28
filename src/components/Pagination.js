// Pagination.js
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setPage } from '../components/redux/action';

function Pagination() {
  const dispatch = useDispatch();
  const totalItems = useSelector(state => state.data.length);
  const itemsPerPage = 5; // You can change this value according to your needs
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (pageNumber) => {
    dispatch(setPage(pageNumber));
    setCurrentPage(pageNumber);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <li key={i} className={currentPage === i ? 'active' : ''}>
          <button onClick={() => handlePageChange(i)}>{i}</button>
        </li>
      );
    }
    return pageNumbers;
  };

  return (
    <div className="pagination">
      <ul>
        {renderPageNumbers()}
      </ul>
    </div>
  );
}

export default Pagination;
