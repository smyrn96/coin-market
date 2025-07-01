import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
} from "../../ui/pagination";

const CustomPagination = ({ totalPages, currentPage, setCurrentPage }) => {
  return (
    <Pagination className="mb-10">
      <PaginationContent>
        <PaginationItem className="text-[var(--primary-foreground)]">
          <PaginationPrevious
            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
          />
        </PaginationItem>

        {[...Array(totalPages)].map((_, i) => {
          const isActive = currentPage === i + 1;
          return (
            <PaginationItem
              key={i}
              className={`bg-[var(--card-foreground)] rounded-lg border border-[var(--card-foreground)] ${
                isActive ? "text-black" : "text-white"
              }`}
            >
              <PaginationLink
                isActive={isActive}
                onClick={() => setCurrentPage(i + 1)}
              >
                {i + 1}
              </PaginationLink>
            </PaginationItem>
          );
        })}

        <PaginationItem>
          <PaginationNext
            onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default CustomPagination;
