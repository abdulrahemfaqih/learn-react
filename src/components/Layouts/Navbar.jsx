import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useLogin } from "../../hooks/useLogin";
import Button from "../Elements/Button";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkMode";
import { useTotalPrice } from "../../context/totalPriceContext";
import { formatRupiah } from "../../utils/priceFormat";

const Navbar = () => {
    const username = useLogin();
    const [totalCart, setTotalCart] = useState(0);
    const cart = useSelector((state) => state.cart.data);

    const { isDarkMode, setIsDarkMode } = useContext(DarkModeContext);
    const {total} = useTotalPrice()

    useEffect(() => {
        const sum = cart.reduce((acc, item) => {
            return acc + item.qty;
        }, 0);
        setTotalCart(sum);
    }, [cart]);

    const handleLogout = () => {
        localStorage.removeItem("token");
        window.location.href = "/login";
    };

    return (
        <div className="sticky top-0 z-10 w-full bg-white border-b border-gray-300">
            <button
               className="absolute right-6 top-6 rounded bg-blue-600 p-2 text-sm font-semibold text-white"
               onClick={() => setIsDarkMode(!isDarkMode)}
            >
               {isDarkMode ? "Light" : "Dark"}
            </button>
            <div className="container mx-auto px-5 py-5 font-bold">
                <div className="flex items-center justify-end gap-8">
                    <Link to={"/profile"}>{username}</Link>
                    <Button onClick={handleLogout}>Logout</Button>
                    <div className="flex items-center p-2 bg-gray-200 rounded-md">
                        Total Item : {totalCart} | price {formatRupiah(total)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
