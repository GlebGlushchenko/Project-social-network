import React from 'react';
import cn from 'classnames';

const Paginator = ({ pageSize, totalUserCount, currentPage, onSelectedPage }) => {
  const sizePage = Math.ceil(totalUserCount / pageSize);
  const countPage = [];

  for (let i = 1; i < sizePage; i++) {
    countPage.push(i);
  }

  const onCurrentPage = (page) => {
    onSelectedPage(page);
  };

  return (
    <div className="paginator">
      {countPage.map((page) => {
        return (
          <div
            onClick={(e) => onCurrentPage(page)}
            className={cn('paginator__item', {
              'paginator__item--active': currentPage === page,
            })}>
            {page}
          </div>
        );
      })}
    </div>
  );
};

export default Paginator;

// "paginator__item paginator__item--active"
