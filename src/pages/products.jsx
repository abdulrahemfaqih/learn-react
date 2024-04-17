import { Fragment, useEffect, useRef, useState } from "react";
import CardProduct from "../components/Fragments/CardProduct";
import Button from "../components/Elements/Button";
import { getProducts } from "../services/product.service";
import { useLogin } from "../hooks/useLogin";
import TableCard from "../components/Fragments/TableCard";

const ProductsPage = (props) => {
   const [products, setProducts] = useState([]);
   const username = useLogin();

   useEffect(() => {
      getProducts((data) => {
         setProducts(data);
      });
   }, []);

   // komponen did update




   const handleLogout = () => {
      localStorage.removeItem("token");
      window.location.href = "/login";
   };

   const handleAddToCart = (id) => {
      if (cart.find((item) => item.id === id)) {
         setCard(
            cart.map((item) =>
               item.id === id ? { ...item, qty: item.qty + 1 } : item,
            ),
         );
      } else {
         setCard([...cart, { id, qty: 1 }]);
      }
   };

   const formatRupiah = (price) => {
      return price.toLocaleString("id-ID", {
         style: "currency",
         currency: "USD",
      });
   };
   return (
      <Fragment>
         <div className="sticky top-0 z-10 w-full bg-white">
            <div className="flex items-center justify-end gap-10 border border-b-2 px-5 py-5 font-bold shadow-md">
               {username}
               <Button onClick={handleLogout}>Logout</Button>
            </div>
         </div>
         <div className="flex flex-col gap-5 px-5 py-5 lg:flex-row">
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
                     <TableCard/>
                  </div>
               </div>
            </div>
         </div>
      </Fragment>
   );
};

export default ProductsPage;
