import React from 'react';
import ReactPaginate from 'react-paginate';

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  return (
    <div className="flex justify-center mt-6">
      <ReactPaginate
        previousLabel={<span className="text-gray-700">&lt;</span>}
        nextLabel={<span className="text-gray-700">&gt;</span>}
        breakLabel="..."
        pageCount={totalPages}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={({ selected }) => onPageChange(selected)}
        containerClassName="flex space-x-2 items-center"
        pageClassName="w-8 h-8 flex items-center justify-center rounded-full bg-gray-300 cursor-pointer hover:bg-[#e48515] hover:text-white"
        previousClassName="w-8 h-8 flex items-center justify-center rounded-full bg-gray-300 cursor-pointer hover:bg-[#e48515] hover:text-white"
        nextClassName="w-8 h-8 flex items-center justify-center rounded-full bg-gray-300 cursor-pointer hover:bg-[#e48515] hover:text-white"
        activeClassName="bg-[#e48515] text-white"
        disabledClassName="opacity-50 cursor-not-allowed"
      />
    </div>
  );
};

export default Pagination;