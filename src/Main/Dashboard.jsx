import React from 'react'
import Cards from '../Cards/Cards'
import ProductTable from '../Table/Table'

function Dashboard() {
  return (
    <div className='flex flex-col py-8 justify-between px-4 '>
        <h1 className='text-2xl font-semibold'>Dashboard</h1>
      <div className='flex flex-col gap-4'>
      <Cards/>
        
        <ProductTable/>

      </div>
        
    </div>
  )
}

export default Dashboard