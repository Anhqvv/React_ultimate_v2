import ReactPaginate from 'react-paginate'

const TableUserWithPaginate = props => {
  const {
    listUsers,
    handleBtnUpdate,
    handleBtnView,
    handleBtnDelete,
    fetchAllUserWithPaginate,
    pageCount, setCurentPage,
    currentPage
  } = props
  const handlePageClick = event => {
    fetchAllUserWithPaginate(+event.selected + 1)
    setCurentPage(+event.selected + 1)
  }
  return (
    <>
      <table className='table table-striped table-bordered table-hover'>
        <thead>
          <tr>
            <th scope='col'>ID</th>
            <th scope='col'>Username</th>
            <th scope='col'>Email</th>
            <th scope='col'>Role</th>
            <th scope='col'>Actions</th>
          </tr>
        </thead>
        <tbody>
          {listUsers &&
            listUsers.length > 0 &&
            listUsers.map(user => {
              return (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.role}</td>
                  <td>
                    <button
                      className='btn btn-secondary mx-2'
                      onClick={() => handleBtnView(user)}
                    >
                      View
                    </button>
                    <button
                      className='btn btn-warning mx-2'
                      onClick={() => handleBtnUpdate(user)}
                    >
                      Update
                    </button>
                    <button
                      className='btn btn-danger mx-2'
                      onClick={() => handleBtnDelete(user)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              )
            })}
        </tbody>
      </table>
      <div className='d-flex justify-content-center'>
        <ReactPaginate
          nextLabel='next >'
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          marginPagesDisplayed={2}
          pageCount={pageCount}
          previousLabel='< previous'
          pageClassName='page-item'
          pageLinkClassName='page-link'
          previousClassName='page-item'
          previousLinkClassName='page-link'
          nextClassName='page-item'
          nextLinkClassName='page-link'
          breakLabel='...'
          breakClassName='page-item'
          breakLinkClassName='page-link'
          containerClassName='pagination'
          activeClassName='active'
          renderOnZeroPageCount={null}
          forcePage={currentPage -1}
        />
      </div>
    </>
  )
}
export default TableUserWithPaginate
