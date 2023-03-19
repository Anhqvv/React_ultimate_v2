const TableUser = props => {
  const { listUsers } = props
  console.log('my data:', listUsers)
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
                  <th>{user.id}</th>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.role}</td>
                  <td>
                    <button className='btn btn-secondary mx-2'>View</button>
                    <button className='btn btn-warning mx-2'>Edit</button>
                    <button className='btn btn-danger mx-2'>Delete</button>
                  </td>
                </tr>
              )
            })}
        </tbody>
      </table>
    </>
  )
}
export default TableUser
