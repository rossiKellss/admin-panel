import ProductTable from "../Table/Table"

function ShowProducts() {
  return (
    <div className="relative py-6 px-4 flex flex-col gap-4">
      <h1 className="text-2xl font-semibold">Products</h1>
      <div className="border h-[96%]">
        <ProductTable/>
      </div>

    </div>
  )
}

export default ShowProducts