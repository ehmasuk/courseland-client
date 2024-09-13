"use client";

import { addtoCart, openSideCart } from "@/lib/redux/CartSlice";
import { message } from "antd";
import { useDispatch } from "react-redux";

function AddToCartBtn({ icon = "", text = "Add to cart", className = "", cartItem }) {
    const dispatch = useDispatch();

    const { _id, title, description, price, image } = cartItem;

    const handleAddtoCart = () => {
        dispatch(addtoCart({ _id, title, description, price, image }));
        message.success("Added to cart");
        setTimeout(()=>{
            dispatch(openSideCart())
        },500)
    };

    return (
        <button onClick={handleAddtoCart} className={className}>
            {icon}
            <span>{text}</span>
        </button>
    );
}

export default AddToCartBtn;
