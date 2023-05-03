import React from 'react'
import Table from './table'
    const th = ['sh','role','status','Action']
    const tr = [['JohnDoe','johndoe@example.com',<img className='carousel-image' src='https://picsum.photos/id/1003/200/200' />,'Active',<button>Delete</button>],['JohnDoe','johndoe@example.com',<img className='carousel-image' src='https://picsum.photos/id/1003/200/200' />,'Active',<button>Delete</button>] ]
function Shows() {
  return (
    <Table
    th = {th}
    tr = {tr}
    />
  )
}

export default Shows