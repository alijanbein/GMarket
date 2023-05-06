import React from 'react'

function Table(props) {

  return (
    <table className={"admin-table"}>
    <thead>
      <tr>
            {props.th && props.th.map((data,index) =>
                <th key={index}>{data}</th>
                )}


      </tr>
    </thead>
    <tbody>

      {props.tr && props.tr.map((data,index) => <tr key={index}>
        {data.map((td,index) => <td key={index}>{td}</td>)}
      </tr>)}
    </tbody>
  </table>
    )
}

export default Table