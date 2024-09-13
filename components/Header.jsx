import { useFetch } from "@/hooks/useFetch";
import { Book } from "lucide-react";
import { cookies } from "next/headers";
import Link from "next/link";
import HeaderMenuItems from "./HeaderMenuItems";

async function Header() {
    const userMe = await useFetch("/api/users/me", cookies().get("token")?.value);

    return (
        <header className="header">
            <div className="max-w-6xl mx-auto px-2">
                <div className="wrapper">
                    <div className="header-item-left">
                        <Link href="/" className="brand flex items-center gap-1">
                            <Book fontSize={20} />
                            Course Land
                        </Link>
                    </div>
                    <div className="header-item-center">
                        <div className="overlay" />
                        <nav className="menu">
                            <div className="menu-mobile-header">
                                <button type="button" className="menu-mobile-arrow">
                                    <i className="ion ion-ios-arrow-back" />
                                </button>
                                <div className="menu-mobile-title px-4">
                                    <a href="/" className="brand flex items-center gap-1">
                                        <Book fontSize={20} />
                                        Course Land
                                    </a>
                                </div>
                                <button type="button" className="menu-mobile-close">
                                    <i className="ion ion-ios-close" />
                                </button>
                            </div>
                            <ul className="menu-section">
                                <li className="menu-item">
                                    <Link href="/">Home</Link>
                                </li>
                                <li className="menu-item">
                                    <Link href="/courses">Courses</Link>
                                </li>
                                {userMe?.isAdmin && (
                                    <li className="menu-item">
                                        <Link href="/admin">Admin</Link>
                                    </li>
                                )}
                            </ul>
                        </nav>
                    </div>
                    <div className="header-item-right">
                        <HeaderMenuItems />
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
