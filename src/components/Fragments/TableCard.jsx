import { useState } from "react";
import { useSelector } from "react-redux";

const TableCard = (props) => {
   const { products } = props;
   const cart = useSelector((state) => state.cart.data);
   const [totalPrice, setTotalPrice] = useState(0);
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

   const totalPriceRef = useRef(null);

   useEffect(() => {
      if (cart.length > 0) {
         totalPriceRef.current.style.display = "table-row";
      } else {
         totalPriceRef.current.style.display = "none";
      }
   }, [cart]);

   return (
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
                        <td>{product.title.substring(0, 10)}...</td>
                        <td>{formatRupiah(product.price)}</td>
                        <td>{item.qty}</td>
                        <td>{formatRupiah(product.price * item.qty)}</td>
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
   );
};
export default TableCard;
