"use client";

import { openSideCart } from "@/lib/redux/CartSlice";
import { message, Skeleton } from "antd";
import { LogInIcon, ShoppingBasket, UserRound } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function HeaderMenuItems() {
    const { user } = useSelector((store) => store.AuthChekerSlice);
    const { cartItems } = useSelector((store) => store.CartSlice);

    const [isReady, setIsReady] = useState(false);

    const dispatch = useDispatch();

    useEffect(() => {
        setIsReady(true);
    }, []);

    const handleLogout = async () => {
        try {
            await fetch("/api/users/logout");
            message.success("Loged out");
            window.location.reload();
        } catch (error) {
            message.error("Something went wrong");
        }
    };
    if (isReady) {
        return (
            <>
                {user && (
                    <Link href="/profile" className="menu-icon">
                        <div className="bg-blue-100 h-8 w-10 rounded flex items-center justify-center">
                            <UserRound size={20} strokeWidth={1.25} />
                        </div>
                    </Link>
                )}

                {!user && (
                    <Link href="/login">
                        <button className="bg-blue-500 px-3 py-1.5 text-sm rounded mr-4 text-white">Login</button>
                    </Link>
                )}

                {!user && (
                    <Link href="/register">
                        <button className="bg-blue-500 px-3 py-1.5 text-sm rounded text-white">Register</button>
                    </Link>
                )}

                <div onClick={() => dispatch(openSideCart())} className="menu-icon relative cursor-pointer">
                    <div class="absolute inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-blue-500 border-2 border-white rounded-full -top-2 -end-2 ">
                        {cartItems?.length}
                    </div>
                    <div className="bg-blue-100 h-8 w-10 rounded flex items-center justify-center">
                        <ShoppingBasket strokeWidth={1.25} />
                    </div>
                </div>

                {user && (
                    <div className="menu-icon cursor-pointer" onClick={handleLogout}>
                        <div className="bg-blue-100 h-8 w-10 rounded flex items-center justify-center">
                            <LogInIcon strokeWidth={0.75} />
                        </div>
                    </div>
                )}
            </>
        );
    } else {
        return <Skeleton.Input active size={30} />;
    }
}

export default HeaderMenuItems;
