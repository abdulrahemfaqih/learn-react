import Button from "../Elements/Button";
const CardProduct = (props) => {
   const { children } = props;
   return (
      <div className="flex w-full max-w-xs flex-col rounded-md border bg-white shadow-md">
         {children}
      </div>
   );
};

const CardHeader = (props) => {
   const { image } = props;
   return (
      <a href="#">
         <img
            src={image}
            alt="product"
            className="h-72 w-full rounded-t-lg object-contain p-8"
         />
      </a>
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

const formatRupiah = (price) => {
   return  price.toLocaleString("id-ID", {
      style: "currency",
      currency: "USD",
   });
};

const CardFooter = (props) => {
   const { price, handleAddToCart, id } = props;
   return (
      <div className="flex items-center justify-between px-5 pb-5">
         <span className="text-xl font-bold text-slate-800">
            {formatRupiah(price)}
         </span>
         <Button classname="bg-orange-600" onClick={() => handleAddToCart(id)}>
            Add to Cart
         </Button>
      </div>
   );
};

CardProduct.Header = CardHeader;
CardProduct.Body = CardBody;
CardProduct.Footer = CardFooter;

export default CardProduct;
