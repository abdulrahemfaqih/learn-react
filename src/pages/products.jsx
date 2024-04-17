import { Fragment, useEffect, useState } from "react";
import { useContext } from "react";
import { DarkModeContext } from "../context/darkMode";
import { getProducts } from "../services/product.service";
import { useLogin } from "../hooks/useLogin";
import CardProduct from "../components/Fragments/CardProduct";
import TableCard from "../components/Fragments/TableCard";
import Navbar from "../components/Layouts/Navbar";

const ProductsPage = (props) => {
   const [products, setProducts] = useState([]);
   useLogin();

   useEffect(() => {
      getProducts((data) => {
         setProducts(data);
      });
   }, []);

   const { isDarkMode } = useContext(DarkModeContext);

   return (
      <Fragment>
         <Navbar />
         <div className={`${isDarkMode && "bg-slate-900"}`}>
            <div className={`container mx-auto`}>
               <div className="flex flex-col justify-center gap-5 px-5 py-5 lg:flex-row">
                  <div className="flex w-full flex-wrap gap-4  lg:pr-4">
                     {products.length > 0 &&
                        products.map((product) => (
                           <CardProduct key={product.id}>
                              <CardProduct.Header
                                 image={product.image}
                                 id={product.id}
                              />
                              <CardProduct.Body name={product.title}>
                                 {product.description}
                              </CardProduct.Body>
                              <CardProduct.Footer
                                 id={product.id}
                                 price={product.price}
                              />
                           </CardProduct>
                        ))}
                  </div>
                  <div className="flex flex-col gap-5 md:w-1/4 lg:w-[40%]">
                     <div className="sticky top-[13%]">
                        <h1 className="mb-2 ml-5 text-3xl font-bold">Cart</h1>
                        <div className="overflow-x-auto sm:overflow-x-visible">
                           <TableCard products={products} />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </Fragment>
   );
};

export default ProductsPage;
