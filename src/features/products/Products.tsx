import { useEffect } from "react";
import { fetchProductsData } from "./productAction";
import { useAppDispatch } from "../../hooks/hooks";


function Products() {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchProductsData())
  }, [dispatch])

  return <div>
    <h2>I am product page</h2>
  </div>;
}

export default Products;
