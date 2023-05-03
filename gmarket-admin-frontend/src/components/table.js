import React from 'react'

function Table(props) {

  return (
    <table className="admin-table">
    <thead>
      <tr>
            {props.th && props.th.map((data,index) =>
                <th key={index}>{data}</th>
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
      
      {props.tr && props.tr.map((data,index) => <tr key={index}>
        {data.map((td,index) => <td key={index}>{td}</td>)}
      </tr>)}
    </tbody>
  </table>
    )
}

export default Table