import { useState, useEffect, useMemo, useCallback } from "react";

export const usePagination = (dataItems, itemsPerPage, visiblePages) => {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPage = useMemo(() => Math.ceil(dataItems?.length / itemsPerPage), [dataItems, itemsPerPage]);
    const [visiblePageRange, setVisiblePageRange] = useState([1, visiblePages]);

    useEffect(() => {
        setCurrentPage(1);
        setVisiblePageRange([1, visiblePages]);
    }, [dataItems, itemsPerPage, visiblePages]);

    const currentData = useCallback(() => {
        const begin = (currentPage - 1) * itemsPerPage;
        const end = begin + itemsPerPage;
        return dataItems?.slice(begin, end);
    },[currentPage, itemsPerPage, dataItems]);

    const updateVisiblePageRange = useCallback((page) => {
        const half = Math.floor(visiblePages / 2);
        const lower = Math.max(page - half, 1);
        const upper = Math.min(lower + visiblePages - 1, totalPage);
        setVisiblePageRange([lower, upper]);
    }, [visiblePages, totalPage]);

    const nextPage = useCallback(() => {
        setCurrentPage((currentPage) => Math.min(currentPage + 1, totalPage));
        updateVisiblePageRange(currentPage + 1);
    }, [setCurrentPage, totalPage, updateVisiblePageRange, currentPage]);

    const prevPage = useCallback(() => {
        setCurrentPage((currentPage) => Math.max(currentPage - 1, 1));
        updateVisiblePageRange(currentPage - 1);
    }, [setCurrentPage, updateVisiblePageRange, currentPage]);

    const jumpPage = useCallback((page) => {
        const pageNumber = Math.max(1, page);
        setCurrentPage((currentPage) => Math.min(pageNumber, totalPage));
        updateVisiblePageRange(pageNumber);
    }, [setCurrentPage, totalPage, updateVisiblePageRange]);

    const hasMorePages = currentPage < totalPage;

    return { visiblePageRange, currentData, nextPage, prevPage, jumpPage, currentPage, totalPage, hasMorePages }
}