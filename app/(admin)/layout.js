"use client";

import { Menu } from "antd";
import { House } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [
    {
        key: "/admin",
        label: <Link href="/admin">Orders</Link>,
    },
    {
        key: "/admin/courses",
        label: <Link href="/admin/courses">Courses</Link>,
    },
    {
        key: "/admin/categories",
        label: <Link href="/admin/categories">Categories</Link>,
    },
];

function Layout({ children }) {
    const pathName = usePathname();

    return (
        <div>
            <div className="flex">
                <Menu
                    style={{
                        minHeight: "100vh",
                        width: "250px",
                    }}
                    defaultSelectedKeys={pathName}
                    mode="inline"
                    theme="dark"
                    items={items}
                />
                <div className="w-full">
                    <div className="px-10 py-2 bg-gray-100 w-full">
                        <div className="flex gap-5 justify-end">
                            <Link href="/" className="flex gap-1 items-center hover:text-blue-600">
                                <House size={18} strokeWidth={1.25} /> Home
                            </Link>
                        </div>
                    </div>
                    <div className="px-10 py-5">{children}</div>
                </div>
            </div>
        </div>
    );
}

export default Layout;
