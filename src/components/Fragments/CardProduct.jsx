import Button from "../Elements/Button";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slices/cartSlice";
import { formatRupiah } from "../../utils/priceFormat";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkMode";
const CardProduct = (props) => {
   const { isDarkMode } = useContext(DarkModeContext);
   const { children } = props;
   return (
      <div className={`flex w-full max-w-xs flex-col rounded-md border shadow-md ${isDarkMode && "bg-slate-900"}`}>
         {children}
      </div>
   );
};

const CardHeader = (props) => {
   const { image, id } = props;
   return (
      <Link to={`/product/${id}`}>
         <img
            id={id}
            src={image}
            alt="product"
            className="h-60 w-full rounded-t-lg object-cover p-8"
         />
      </Link>
   );
};

const CardBody = (props) => {
   const { children, name } = props;
   return (
      <div className="h-full px-5 pb-5">
         <a href="">
            <h5 className="text-xl font-semibold tracking-tight text-slate-700">
               {name ? name.substring(0, 26) : "Product Name"}....
            </h5>
            <p className="text-s text-slate-900">
               {children ? children.substring(0, 100) : "Product Description"}....
            </p>
         </a>
      </div>
   );
};



const CardFooter = (props) => {
   const { price, id } = props;
   const dispatch = useDispatch()
   return (
      <div className="flex items-center justify-between px-5 pb-5">
         <span className="text-xl font-bold text-slate-800">
            {formatRupiah(price)}
         </span>
         <Button classname="bg-orange-600" onClick={() =>dispatch(addToCart({id, qty:1}))}>
            Add to Cart
         </Button>
      </div>
   );
};

CardProduct.Header = CardHeader;
CardProduct.Body = CardBody;
CardProduct.Footer = CardFooter;

export default CardProduct;
