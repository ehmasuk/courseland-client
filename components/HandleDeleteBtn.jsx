"use client";

import { Popconfirm, message } from "antd";
import { Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";


function HandleDeleteBtn({ url }) {
    const router = useRouter();

    const handleDelete = async () => {
        try {
            await fetch(url, { method: "DELETE" });
            message.success("Deleted");
            router.refresh();
        } catch (error) {
            message.error("Something went wrong");
        }
    };
    return (
        <div className="cursor-pointer">
            <Popconfirm onConfirm={handleDelete} title="Alert!" description="Are you sure to delete this?">
                <Trash2 size={18} color="#FF0000" strokeWidth={1.25} />
            </Popconfirm>
        </div>
    );
}

export default HandleDeleteBtn;
