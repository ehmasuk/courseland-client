"use client";

import { closeSideCart, removeFromCart } from "@/lib/redux/CartSlice";
import { Drawer } from "antd";
import { Trash2 } from "lucide-react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";

function SideCart() {
    const { cartItems, sideCartIsOpen, totalPrice } = useSelector((store) => store.CartSlice);

    const dispatch = useDispatch();

    const onClose = () => {
        dispatch(closeSideCart());
    };

    return (
        <Drawer title={`Cart (${cartItems.length})`} onClose={onClose} open={sideCartIsOpen} width={500}>
            {cartItems?.map((cartItem) => {
                return (
                    <div key={cartItem._id} className="rounded border border-gray-100 mb-4 shadow p-2 grid grid-cols-3 gap-4 ">
                        <div className="col-span-1">
                            <img src={cartItem.image} alt="image" className="max-lg:w-full rounded object-cover" />
                        </div>
                        <div className="col-span-2 detail w-full">
                            <h5 className="font-manrope font-bold text-sm text-gray-900 line-clamp-2">{cartItem.title}</h5>
                            <div className="flex justify-between items-center">
                                <h6 className="text-indigo-600 font-manrope font-bold leading-9 text-right">${cartItem.price}</h6>
                                <Trash2 size={16} color="red" role="button" onClick={() => dispatch(removeFromCart(cartItem._id))} />
                            </div>
                        </div>
                    </div>
                );
            })}
            {totalPrice > 0 ?(
                <div>
                    <div className="flex flex-col mt-3 md:flex-row items-center md:items-center justify-between lg:px-6 pb-6 border-b border-gray-200 max-lg:max-w-lg max-lg:mx-auto">
                        <h5 className="text-gray-900 text-lg font-manrope font-semibold w-full max-md:text-center max-md:mb-4">Subtotal</h5>
                        <div className="flex items-center justify-between gap-5 ">
                            <h6 className="font-manrope text-lg font-bold lead-10 text-indigo-600">${totalPrice}</h6>
                        </div>
                    </div>
                    <div className="grid mt-3 grid-cols-2 gap-4 items-center">
                        <button className="rounded-lg p-2 border-2 border-indigo-600 text-indigo-600 font-semibold w-full text-center duration-500 hover:bg-indigo-700 hover:text-white ">
                            Continue shopping
                        </button>

                        <Link href="/checkout">
                            <button className="rounded-lg p-2 border-2 border-indigo-600 bg-indigo-600 text-white font-semibold w-full text-center duration-500 hover:bg-indigo-700 ">Checkout</button>
                        </Link>
                    </div>
                </div>
            ): <p className="p-3 text-red-500 text-sm">Your cart is empty</p>}
        </Drawer>
    );
}

export default SideCart;
