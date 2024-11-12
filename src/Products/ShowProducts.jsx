import { useEffect, useState } from "react";
import ProductTable from "../Table/Table";
import { MdAddCircle } from "react-icons/md";
import { Link } from "react-router-dom";
import {
  useGetProductsQuery,
  useDeleteProductsMutation,
  useLazySearchProductsQuery,
  useLazyFilterProductsQuery,
} from "../api/productApiSlice";

function ShowProducts() {
  const { data: initialData } = useGetProductsQuery();
  const [deleteProducts] = useDeleteProductsMutation();
  const [triggerSearch] = useLazySearchProductsQuery();
  const [triggerFilter] = useLazyFilterProductsQuery();
  const [fetchedData, setFetchedData] = useState();
  const [search, setSearch] = useState();

  useEffect(() => {
    if (initialData) {
      setFetchedData(initialData);
    }
  }, [initialData]);

  const capitalizeLetter = (value) => {
    const capitilizedVal = value.charAt(0).toUpperCase() + value.slice(1);
    return capitilizedVal;
  };
  const onSearch = async () => {
    const len = search?.length;
    if (!len == 0) {
      const searchCred = capitalizeLetter(search);

      try {
        const res = await triggerSearch(searchCred);
        setFetchedData(res.data);
      } catch (err) {
        console.log(err);
      }

    }
    else{
      alert('Empty search field');
    }
  };

  const onReset = () => {
    setFetchedData(initialData);
    setSearch('');
  };

  const deleteItem = async (id) => {
    console.log(id);
    try {
      const { data } = await deleteProducts(id);
      console.log(data.message);
    } catch (err) {
      console.log(err);
    }
  };

 

  return (
    <div className="relative py-8 px-8 flex flex-col gap-4">
      <h1 className="text-3xl font-semibold">Products</h1>
      <div className="flex gap-1">
        <div className="flex gap-2">
          <input
            type="text"
            className="py-1 pl-2"
            placeholder=""
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            required
          />
          <button
            className="px-2 py-1 bg-blue-400 hover:bg-blue-500 text-white"
            onClick={onSearch}
          >
            Search
          </button>
        </div>
        <button className="px-2 py-1 bg-red-400 text-white" onClick={onReset}>Reset</button>
      </div>
      <div className="mt-2">{fetchedData && <ProductTable props={fetchedData.products} onDelete={deleteItem} />}</div>
      <div className="relative  drop-shadow-md">
        <Link to="/products/add-products">
          <MdAddCircle className="absolute text-6xl -bottom-5 right-0 text-pink cursor-pointer" />
        </Link>
      </div>
    </div>
  );
}

export default ShowProducts;
