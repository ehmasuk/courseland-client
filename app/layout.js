import Footer from "@/components/Footer";
import Header from "@/components/Header";
import StoreProvider from "@/lib/redux/StoreProvider";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { Poppins } from "next/font/google";
import "./globals.css";


const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600"] });

export const metadata = {
    title: "Course Land",
    description: "Course Land",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <StoreProvider>
                <AntdRegistry>
                    <body className={poppins.className}>
                        
                        {children}
                        
                    </body>
                </AntdRegistry>
            </StoreProvider>
        </html>
    );
}
