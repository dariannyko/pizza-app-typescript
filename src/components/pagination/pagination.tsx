import ReactPaginate from "react-paginate";
import styles from "./pagination.module.scss";
import { setCurrentPage } from "../../store/slice/filter-slice";
import { useDispatch } from "react-redux";

interface PaginationProps {
  currentPage: number;
}
const Pagination = ({ currentPage }: PaginationProps) => {
  const dispatch = useDispatch();

  const onChangePage = (page: number) => {
    dispatch(setCurrentPage(page));
  };

  return (
    <ReactPaginate
      className={styles.container}
      breakLabel="..."
      nextLabel=">"
      onPageChange={(event) => onChangePage(event.selected + 1)}
      pageRangeDisplayed={4}
      pageCount={3}
      forcePage={currentPage - 1}
      previousLabel="<"
    />
  );
};

export { Pagination };
