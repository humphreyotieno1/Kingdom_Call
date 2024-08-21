import React from 'react';

const Pagination = ({ totalPages, currentPage, onPageChange, type }) => {
  return (
    <div className="flex justify-center mt-6 space-x-2 items-center">
      {type === 'bracketDots' && (
        <button 
          onClick={() => onPageChange(currentPage - 1)} 
          disabled={currentPage === 0} 
          className="text-gray-700 text-3xl focus:outline-none"
        >
          &lt;
        </button>
      )}

      {type === 'bracketDots' && (
        <div className="flex items-center space-x-1">
          {Array.from({ length: totalPages }).map((_, dotIndex) => (
            <span 
              key={dotIndex} 
              className={`w-4 h-4 rounded-full ${
                currentPage === dotIndex 
                  ? 'bg-[#e48515]' 
                  : 'bg-gray-400'
              }`}
            />
          ))}
        </div>
      )}

      {type === 'bracketDots' && (
        <button 
          onClick={() => onPageChange(currentPage + 1)} 
          disabled={currentPage === totalPages - 1} 
          className="text-gray-700 text-3xl focus:outline-none"
        >
          &gt;
        </button>
      )}

      {type === 'radio' && (
        <div className="flex space-x-2">
          {Array.from({ length: totalPages }).map((_, pageIndex) => (
            <input
              key={pageIndex}
              type="radio"
              name="pagination"
              checked={currentPage === pageIndex}
              onChange={() => onPageChange(pageIndex)}
              className="text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#e48515]"
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Pagination;