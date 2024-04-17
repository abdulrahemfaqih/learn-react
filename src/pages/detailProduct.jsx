import { useParams } from "react-router-dom";
import { Fragment, useEffect, useState } from "react";
import { getDetailProduct } from "../services/product.service";
import Navbar from "../components/Layouts/Navbar";

const DetailProductPage = () => {
   const { id } = useParams();
   const [product, setProduct] = useState({});

   useEffect(() => {
      getDetailProduct(id, (data) => {
         setProduct(data);
      });
   }, [id]);

   console.log(product);

   return (
      <Fragment>
         <Navbar/>
         <div className="w-100 flex min-h-screen items-center justify-center border">
            {Object.keys(product).length > 0 && (
               <div className="flex max-w-xl rounded-md border p-5 font-poppins shadow-md">
                  <div className="relative w-48 flex-none">
                     <img
                        src={product.image}
                        alt={product.title}
                        className="absolute inset-0 h-full w-full object-cover"
                        loading="lazy"
                     />
                  </div>
                  <form className="flex-auto p-6">
                     <div className="flex flex-wrap">
                        <h1 className="flex-auto text-lg font-semibold text-slate-900">
                           {product.title}
                        </h1>
                        <div className="text-lg font-semibold text-slate-500">
                           {product.price}
                        </div>
                        <div className="mt-2 w-full flex-none text-sm font-medium text-slate-700">
                           Review : {product.rating.rate}/5 ({product.rating.count}
                           )
                        </div>
                     </div>
                     <div className="mb-6 mt-4 flex items-baseline border-b border-slate-200 pb-6">
                        <div className="flex space-x-2 text-sm">
                           {product.description}
                        </div>
                     </div>
                     <div className="mb-6 flex space-x-4 text-sm font-medium">
                        <div className="flex flex-auto space-x-4">
                           <button
                              className="h-10 rounded-md bg-black px-6 font-semibold text-white"
                              type="submit"
                           >
                              Buy now
                           </button>
                           <button
                              className="h-10 rounded-md border border-slate-200 px-6 font-semibold text-slate-900"
                              type="button"
                           >
                              Add to bag
                           </button>
                        </div>
                        <button
                           className="flex h-9 w-9 flex-none items-center justify-center rounded-md border border-slate-200 text-slate-300"
                           type="button"
                           aria-label="Like"
                        >
                           <svg
                              width="20"
                              height="20"
                              fill="currentColor"
                              aria-hidden="true"
                           >
                              <path
                                 fillRule="evenodd"
                                 clipRule="evenodd"
                                 d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                              />
                           </svg>
                        </button>
                     </div>
                     <p className="text-sm text-slate-700">
                        Free shipping on all continental US orders.
                     </p>
                  </form>
               </div>
            )}
         </div>
      </Fragment>
   );
};

export default DetailProductPage;
