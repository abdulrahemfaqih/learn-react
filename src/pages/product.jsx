import { Fragment, useEffect, useRef, useState } from "react";
import CardProduct from "../components/Fragments/CardProduct";
import Button from "../components/Elements/Button";
import { getProducts } from "../services/product.service";
import { getUsername } from "../services/auth.service";



const ProductsPage = (props) => {
   // UseState
   const [cart, setCard] = useState([]);
   const [totalPrice, setTotalPrice] = useState(0);
   const [products, setProducts] = useState([]);
   const [username, setUsername] = useState("")

   /**
    * UseEffect -> perubahan komponen
    */
   // komponen did amount
   useEffect(() => {
      setCard(JSON.parse(localStorage.getItem("cart")) || []);
   }, []);

   useEffect(() => {
      const token = localStorage.getItem("token");
      if (token) {
         setUsername(getUsername(token));
      } else {
         window.location.href = "/login"
      }
   }, []);

   useEffect(() => {
      getProducts((data) => {
         setProducts(data);
      });
   }, []);

   // komponen did update
   useEffect(() => {
      // acc = akumulator
      if (products.length > 0 && cart.length > 0) {
         const sum = cart.reduce((acc, item) => {
            const product = products.find((product) => product.id === item.id);
            return acc + product.price * item.qty;
         }, 0);
         setTotalPrice(sum);
         localStorage.setItem("cart", JSON.stringify(cart));
      }
   }, [cart, products]);

   /**
    * UseRef
    */

   const cartRef = useRef(JSON.parse(localStorage.getItem("cart")) || []);

   const handleAddToCartRef = (id) => {
      cartRef.current = [
         ...cartRef.current,
         {
            id,
            qty: 1,
         },
      ];
      localStorage.setItem("cart", JSON.stringify(cartRef.current));
   };

   const totalPriceRef = useRef(null);

   useEffect(() => {
      if (cart.length > 0) {
         totalPriceRef.current.style.display = "table-row";
      } else {
         totalPriceRef.current.style.display = "none";
      }
   }, [cart]);

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
                        <CardProduct.Header image={product.image} />
                        <CardProduct.Body name={product.title}>
                           {product.description}
                        </CardProduct.Body>
                        <CardProduct.Footer
                           id={product.id}
                           price={product.price}
                           handleAddToCart={handleAddToCart}
                        />
                     </CardProduct>
                  ))}
            </div>
            <div className="flex flex-col gap-5 md:w-1/4 lg:w-[40%]">
               <div className="sticky top-[13%]">
                  <h1 className="mb-2 ml-5 text-3xl font-bold">Cart</h1>
                  <div className="xs:overflow-x-auto">
                     <table className="table-auto border-separate border-spacing-x-5 text-left">
                        <thead>
                           <tr>
                              <th>Product</th>
                              <th>Price</th>
                              <th>Quantity</th>
                              <th>Total</th>
                           </tr>
                        </thead>
                        <tbody>
                           {products.length > 0 &&
                              cart.map((item) => {
                                 const product = products.find(
                                    (product) => product.id === item.id,
                                 );
                                 return (
                                    <tr key={item.id}>
                                       <td>
                                          {product.title.substring(0, 10)}...
                                       </td>
                                       <td>{formatRupiah(product.price)}</td>
                                       <td>{item.qty}</td>
                                       <td>
                                          {formatRupiah(
                                             product.price * item.qty,
                                          )}
                                       </td>
                                    </tr>
                                 );
                              })}
                           <tr ref={totalPriceRef}>
                              <td colSpan={3}>
                                 <b>Total Price</b>
                              </td>
                              <td>
                                 <b>{formatRupiah(totalPrice)}</b>
                              </td>
                           </tr>
                        </tbody>
                     </table>
                  </div>
               </div>
            </div>
         </div>
      </Fragment>
   );
};

export default ProductsPage;
