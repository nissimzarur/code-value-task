import IPagination from "./pagination.interfaces";

const Pagination = ({
  totalElements,
  take,
  className,
  setPage,
  currentPage,
}: IPagination) => {
  const totalPages = Math.ceil(totalElements / take);
  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(
      <button
        className={`join-item btn ${currentPage === i ? "text-lime-700 text-xl" : ""}`}
        onClick={() => setPage(i)}
        key={i}
      >
        {i}
      </button>
    );
  }
  return <div className={`join ${className}`}>{pages}</div>;
};
export default Pagination;
