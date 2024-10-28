import React from 'react'
import Cards from '../Cards/Cards'
import ProductTable from '../table/Table'

function Dashboard() {
  return (
    <div className='flex flex-col justify-evenly px-4 border'>
        <h1>Dashboard</h1>
        <Cards/>
        <h2>Recent Orders</h2>
        <ProductTable/>
    </div>
  )
}

export default Dashboard