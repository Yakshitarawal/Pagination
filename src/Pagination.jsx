const Pagination = ({ total_no_pages, handlePagination }) => {
  const btns = new Array(total_no_pages)
    .fill(0)
    .map((el, ind) => (
      <button onClick={() => handlePagination(ind + 1)}>{ind + 1}</button>
    ));

  return <>{btns}</>;
};

export default Pagination;
