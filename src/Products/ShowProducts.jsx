import ProductTable from "../Table/Table"
import { MdAddCircle } from "react-icons/md";
import {Link} from 'react-router-dom'

function ShowProducts() {
  return (
    <div className="relative py-8 px-4 flex flex-col gap-4">
      <h1 className="text-3xl font-semibold">Products</h1>
      <div className="h-[90%]">
        <ProductTable/>
      </div>
      <div className="relative drop-shadow-md">
        <Link to='/products/add-products'>
        <MdAddCircle className="absolute text-6xl bottom-4 right-0 text-pink cursor-pointer"/>
        </Link>

      </div>

    </div>
  )
}

export default ShowProducts