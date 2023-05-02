import React from 'react'

function Table(props) {
    console.log(props);
  return (
    <table className="admin-table">
    <thead>
      <tr>
            {props.th && props.th.map(data =>
                <th>{data}</th>
                )}

        {/* <th>Username</th>
        <th>Email</th>
        <th>Role</th>
        <th>Status</th>
        <th>Action</th> */}
      </tr>
    </thead>
    <tbody>
      {/* <tr>
        <td>JohnDoe</td>
        <td>johndoe@example.com</td>
        <td><img className='carousel-image' src='https://picsum.photos/id/1003/200/200' /></td>
        <td>Active</td>
        <td>
          <button>Delete</button>
        </td>
      </tr> */}
      
      {props.tr && props.tr.map(data => <tr>
        {data.map(td => <td>{td}</td>)}
      </tr>)}
    </tbody>
  </table>
    )
}

export default Table