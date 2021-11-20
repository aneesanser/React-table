
function Pagination({ postsPerPage, totalPosts, paginate, next, prev, currentPage, filteredDta }) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i)
  }
  let entry = currentPage * postsPerPage
  let pageCount = entry - postsPerPage + 1
  if (filteredDta.length >= 0 && pageCount && entry) {
    entry = filteredDta.length + pageCount - 1
  }
  if (filteredDta.length === 0) {
    entry = 0;
    pageCount = 0;
  }
  if(entry===pageCount && filteredDta.length){
    pageCount=null;
    entry=1;
  }
  return (
    <div>
      <div className="row">
        <div className="col-sm-12 col-md-5">
          <div className="data-table-info">
            Showing {pageCount} to {entry} entries</div>
        </div>
        <div className="col-sm-12 col-md-7">
          <div className="dataTables_paginate paging_simple_numbers">
            <nav>
              <ul className="pagination ">
                <li className={currentPage === 1 ?
                  "page-item disabled"
                  : "page-item"}>
                  <button onClick={prev}
                    className="page-link"
                    tabIndex="-1">Previous</button>
                </li>
                {pageNumbers.map(num => (
                  <li key={num}
                    className={currentPage === num ?
                      "page-item active" : "page-item"}>
                    <button onClick={() =>
                      paginate(num)}
                      className="page-link ml-3">
                      {num}
                    </button>
                  </li>
                ))}
                <li className={currentPage === pageNumbers.length ?
                  "page-item disabled" : "page-item"}>
                  <button onClick={next}
                    className="page-link ml-2">Next</button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pagination
