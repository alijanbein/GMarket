import React from 'react'
import Table from './table'
    const th = ['email','role','status','Action']
    const tr = [['JohnDoe','johndoe@example.com',<img className='carousel-image' src='https://picsum.photos/id/1003/200/200' />,'Active',<button>Delete</button>],['JohnDoe','johndoe@example.com',<img className='carousel-image' src='https://picsum.photos/id/1003/200/200' />,'Active',<button>Delete</button>] ]
function Reports() {
  return (
    <Table
    th = {th}
    tr = {tr}
    />
  )
}

export default Reports