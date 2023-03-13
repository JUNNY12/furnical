import React from "react";
import styled from "styled-components";

const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
  .span{
    font-size: 20px;
    color: ${({ theme }) => theme.colors.primary};
    margin-left: 4px;
    margin-right: 4px;
  }
  @media (max-width: 768px) {
    margin-bottom: 30px;
  }
`;

const PageNumberButton = styled.button`
  border: 1px solid ${({ theme }) => theme.colors.primary};
  background-color: ${({ active, theme }) => (active ? theme.colors.primary : "white")};
  color: ${({ active, theme }) => (active ? "white" : theme.colors.primary)};
  cursor: pointer;
  padding: 8px;
  margin: 0 4px;
  border-radius: 4px;

  @media (max-width: 768px) {
    padding: 4px;
  }
`;

const PageNumberInput = styled.input`
  border: 1px solid ${({ theme }) => theme.colors.primary};
  background-color: white;
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  padding: 8px;
  margin: 0 4px;
  border-radius: 4px;
  text-align: center;
  width: 45px;

  &:focus {
    outline: none;
  }

  @media (max-width: 768px) {
    padding: 4px;
  }
`;

const Pagination = ({ currentPage, prevPage, totalPage, nextPage, jumpPage, hasMorePages, visiblePageRange }) => {


    return (
        <PaginationWrapper>
            <PageNumberButton disabled={currentPage === 1} onClick={prevPage}>
                Prev
            </PageNumberButton>
            {visiblePageRange[0] > 1 && (
                    <>
                        <PageNumberButton onClick={() => jumpPage(1)}>1</PageNumberButton>
                        {visiblePageRange[0] > 2 && <span>..</span>}
                    </>
                )}
                {[...Array(visiblePageRange[1] - visiblePageRange[0] + 1)].map(
                    (_, i) => {
                        const pageNumber = visiblePageRange[0] + i;
                        return (
                            <PageNumberButton
                                key={pageNumber}
                                onClick={() => jumpPage(pageNumber)}
                                disabled={pageNumber === currentPage}
                                active={pageNumber === currentPage}
                            >
                                {pageNumber}
                            </PageNumberButton>
                        );
                    }
                )}
                {visiblePageRange[1] < totalPage && (
                    <>
                        {visiblePageRange[1] < totalPage - 1 && <span className="span">..</span>}
                        <PageNumberButton onClick={() => jumpPage(totalPage)}>
                            {totalPage}
                        </PageNumberButton>
                    </>
                )}
            <PageNumberButton disabled={currentPage === totalPage} onClick={nextPage}>
                Next
            </PageNumberButton>
            <PageNumberInput
                type="number"
                min={1}
                max={totalPage}
                value={currentPage}
                onChange={(e) => jumpPage(e.target.value)}
            />
            <span className="span">/ {totalPage}</span>
         
        </PaginationWrapper>
    );
};

export default Pagination;
