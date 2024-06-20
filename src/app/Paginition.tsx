import React, { Dispatch, SetStateAction, useState } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
type TProps = {
  pages: number;
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  generatedPages: number[];
};
export default function FooterPagination({
  pages,
  currentPage,
  setCurrentPage,
  generatedPages,
}: TProps) {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <button
            onClick={() => setCurrentPage((prev) => prev - 1)}
            disabled={currentPage === 1}
          >
            <PaginationPrevious />
          </button>
        </PaginationItem>
        {generatedPages.map((page) => (
          <PaginationItem key={page}>
            <button onClick={() => setCurrentPage(page)}>
              <PaginationLink>{page}</PaginationLink>
            </button>
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <button
            onClick={() => setCurrentPage((prev) => prev + 1)}
            disabled={currentPage === pages}
          >
            <PaginationNext />
          </button>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
