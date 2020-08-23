import clsx from 'clsx';

function Pagination({
    page, // page start from 1, not 0
    perPage,
    total,
    onChangePage,
}) {
    const maxPage = Math.ceil(total / perPage);
    let pageList = null;

    if (maxPage <= 7)
        pageList = [1, 2, 3, 4, 5, 6, 7].slice(0, maxPage);
    else if (page <= 4)
        pageList = [1, 2, 3, 4, 5, null, maxPage];
    else if (page >= maxPage - 3)
        pageList = [1, null, maxPage - 4, maxPage - 3, maxPage - 2, maxPage - 1, maxPage];
    else
        pageList = [1, null, page - 1, page, page + 1, null, maxPage];

    function goToPage(nextPage) {
        if (nextPage && nextPage !== page && nextPage >= 1 && nextPage <= maxPage)
            onChangePage(nextPage);
    }

    return (
        <div className='flex'>
            <button onClick={() => goToPage(page - 1)}>
                上一頁
            </button>
            {pageList.map(
                (currentPage, i) => <button key={i} className={currentPage === page ? 'light' : 'normal'} onClick={() => goToPage(currentPage)}>{currentPage || '...'}</button>
            )}
            <button onClick={() => goToPage(page + 1)}>
                下一頁
            </button>
            <style jsx>{`
                button {
                    font-size: 0.875rem;
                    padding: 4px;
                    border: 0;
                    margin: 0 2px;
                    background: #fff;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    cursor: pointer;
                    border: 1px solid #606060;
                }
                .light {
                    color: #fff;
                    background: #CC0000;
                }
            `}</style>
        </div>
    );
}

export default Pagination;