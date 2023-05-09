import React from 'react'
import { phoneStyle } from '../constants/utils'

function Table(props) {

  return (
    <table className={`admin-table ${props.show && 'show-table'}`}>
    <thead>
      <tr>
            {props.th && props.th.map((data,index) =>
                <th key={index}>{data}</th>
                )}


      </tr>
    </thead>
    <tbody>

      {props.tr && props.tr.map((data,index) => <tr key={index}>
        {data.map((td,index) => <td key={index}>{
          index == 3 && props.dashboard ? phoneStyle(td) :td}</td>)}
      </tr>)}
    </tbody>
  </table>
    )
}

export default Table