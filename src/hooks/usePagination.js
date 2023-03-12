import { useState, useEffect } from "react";



export const usePagination = (dataItems, itemsPerPage, visiblePages) => {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPage = Math.ceil(dataItems?.length / itemsPerPage);
    const [visiblePageRange, setVisiblePageRange] = useState([1, visiblePages]);


    useEffect(() => {
        setCurrentPage(1);
        setVisiblePageRange([1, visiblePages]);
    }, [dataItems, itemsPerPage, visiblePages]);

    let currentData = () => {
        const begin = (currentPage - 1) * itemsPerPage;
        const end = begin + itemsPerPage;
        return dataItems?.slice(begin, end);
    };

    const nextPage = () => {
        setCurrentPage((currentPage) => Math.min(currentPage + 1, totalPage));
        updateVisiblePageRange(currentPage + 1)
    }

    const prevPage = () => {
        setCurrentPage((currentPage) => Math.max(currentPage - 1, 1));
        updateVisiblePageRange(currentPage - 1)
    }

    const jumpPage = (page) => {
        const pageNumber = Math.max(1, page);
        setCurrentPage((currentPage) => Math.min(pageNumber, totalPage));
        updateVisiblePageRange(pageNumber)
    }

    const updateVisiblePageRange = (page) => {
        const half = Math.floor(visiblePages / 2);
        const lower= Math.max(page-half, 1);
        const upper= Math.min(lower+visiblePages-1, totalPage);
        setVisiblePageRange([lower, upper]);
    }
    const hasMorePages= currentPage < totalPage;

return{visiblePageRange,currentData, nextPage, prevPage, jumpPage, currentPage, totalPage , hasMorePages}
}