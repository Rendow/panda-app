import s from "./Pagination.module.scss";
import classNames from "classnames";
import React from "react";

type PaginationPropsType = {
    totalRow: number
    rowPerPage: number
    currentPage: number
    setCurrentPage: (value: number) => void
}

export const Pagination = React.memo(({rowPerPage, totalRow, setCurrentPage, currentPage}: PaginationPropsType) => {
    const pageNumbers = []
    for (let i = 1; i <= Math.ceil(totalRow / rowPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <div className={s.pagination}>
            {pageNumbers.map(num => {
                return <button
                    onClick={() => {
                        setCurrentPage(num)
                    }}
                    className={classNames(s.pageBtn, {[s.activeBtn]: currentPage === num})}
                    key={num}> {num}</button>
            })}
        </div>
    )
})
