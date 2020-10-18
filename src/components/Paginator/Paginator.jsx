import React from 'react';

const Paginator = () => {
  return (
    <div className="paginator">
      <div className="paginator__item paginator__item--active">1</div>
      <div className="paginator__item">2</div>
      <div className="paginator__item">3</div>
      <div className="paginator__item">4</div>
      <div className="paginator__item">5</div>
      <div className="paginator__item">...</div>
    </div>
  );
};

export default Paginator;
