import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useFetch } from "@/hooks/useFetch";
import { Rate } from "antd";
import Image from "next/image";
import Link from "next/link";

async function Homepage() {
    const courses = await useFetch("/api/courses");


    return (
        <div>
            <Header />
            {/* ----------------------------------------------------------------------- */}
            {/*                             HERO SECTION                              */}
            {/* ----------------------------------------------------------------------- */}
            <section className="my-5 max-w-6xl px-5 mx-auto">
                <div
                    className="rounded-lg text-center min-h-[300px] lg:min-h-[500px] p-5 flex flex-col items-center justify-center bg-center gap-10 lg:gap-16"
                    style={{
                        backgroundImage: `linear-gradient(#00000088, #00000054), url('/img/new-home-hero.png')`,
                    }}
                >
                    <h1 className="lg:text-5xl text-4xl font-bold text-white">Creative writing courses</h1>
                    <div className="flex p-1 bg-white w-full max-w-[500px] rounded-lg relative">
                        <div className="flex w-10 items-center justify-center rounded-tl-lg rounded-bl-lg border-r border-gray-200 bg-white p-5">
                            <svg viewBox="0 0 20 20" aria-hidden="true" className="pointer-events-none absolute w-5 fill-gray-500 transition">
                                <path d="M16.72 17.78a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM9 14.5A5.5 5.5 0 0 1 3.5 9H2a7 7 0 0 0 7 7v-1.5ZM3.5 9A5.5 5.5 0 0 1 9 3.5V2a7 7 0 0 0-7 7h1.5ZM9 3.5A5.5 5.5 0 0 1 14.5 9H16a7 7 0 0 0-7-7v1.5Zm3.89 10.45 3.83 3.83 1.06-1.06-3.83-3.83-1.06 1.06ZM14.5 9a5.48 5.48 0 0 1-1.61 3.89l1.06 1.06A6.98 6.98 0 0 0 16 9h-1.5Zm-1.61 3.89A5.48 5.48 0 0 1 9 14.5V16a6.98 6.98 0 0 0 4.95-2.05l-1.06-1.06Z" />
                            </svg>
                        </div>
                        <input type="text" className="w-full bg-white pl-2 text-base outline-0 aikhanelekho placeholder:text-blue-900" placeholder="Search..." />
                        <input type="button" defaultValue="Buscar" className="bg-blue-400 cursor-pointer px-4 py-2 rounded-lg text-white font-semibold hover:bg-blue-600 transition-colors" />
                        <div className="w-full hidden absolute left-0 top-14 overflow-auto max-h-[500px] rounded bg-white shadow-lg p-1 text-left">
                            <div className="flex flex-col gap-3">
                                <a className="flex items-start gap-4 p-4 rounded-md bg-background hover:bg-muted/50 transition-colors hover:bg-blue-50 transition" href="#">
                                    <img
                                        src="https://escuela-ray-bolivar-sosa.com/storage/uploads/1678039548-detective-y-asesina.png"
                                        alt="Course Image"
                                        width={80}
                                        height={80}
                                        className="rounded-md object-cover"
                                        style={{ aspectRatio: "80 / 80", objectFit: "cover" }}
                                    />
                                    <div className="flex-1">
                                        <h3 className="font-medium">Introduction to Web Development</h3>
                                        <p className="text-sm text-gray-500">Learn the fundamentals of HTML, CSS, and JavaScript to build modern web applications.</p>
                                        <div className="flex items-center gap-1 mt-2" style={{ display: "flex", gap: "0.25rem", alignItems: "center" }}>
                                            <i className="fas fa-star text-[12px] text-orange-500" />
                                            <i className="fas fa-star text-[12px] text-orange-500" />
                                            <i className="fas fa-star text-[12px] text-orange-500" />
                                            <i className="fas fa-star text-[12px] text-orange-500" />
                                            <i className="fas fa-star text-[12px] text-orange-500" />
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="flex flex-col gap-3">
                                <a className="flex items-start gap-4 p-4 rounded-md bg-background hover:bg-muted/50 transition-colors hover:bg-blue-50 transition" href="#">
                                    <img
                                        src="https://escuela-ray-bolivar-sosa.com/storage/uploads/1678039548-detective-y-asesina.png"
                                        alt="Course Image"
                                        width={80}
                                        height={80}
                                        className="rounded-md object-cover"
                                        style={{ aspectRatio: "80 / 80", objectFit: "cover" }}
                                    />
                                    <div className="flex-1">
                                        <h3 className="font-medium">Introduction to Web Development</h3>
                                        <p className="text-sm text-gray-500">Learn the fundamentals of HTML, CSS, and JavaScript to build modern web applications.</p>
                                        <div className="flex items-center gap-1 mt-2" style={{ display: "flex", gap: "0.25rem", alignItems: "center" }}>
                                            <i className="fas fa-star text-[12px] text-orange-500" />
                                            <i className="fas fa-star text-[12px] text-orange-500" />
                                            <i className="fas fa-star text-[12px] text-orange-500" />
                                            <i className="fas fa-star text-[12px] text-orange-500" />
                                            <i className="fas fa-star text-[12px] text-orange-500" />
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ----------------------------------------------------------------------- */}
            {/*                                 COURSES                                 */}
            {/* ----------------------------------------------------------------------- */}
            <section className="my-20">
                <div className="max-w-6xl px-5 mx-auto">
                    <p className="text-2xl font-bold mb-5">Popular courses</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {courses?.map((course) => {
                            return (
                                <Link href={`/courses/${course?.slug}`} key={course?._id} className="bg-background rounded-lg">
                                    <Image width={300} height={300} src={course?.image} alt="Course Image" className="w-full h-40 object-cover rounded-lg" />
                                    <div>
                                        <h3 className="my-2 font-semibold">Introduction to Web Development</h3>
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-1" style={{ display: "flex", gap: "0.25rem", alignItems: "center" }}>
                                                <Rate value={5} className="[&_*]:text-xs [&_*]:text-orange-400" />
                                            </div>
                                            <div className="font-semibold">
                                                <span className="text-lg">${course?.price}</span>
                                                <span className="text-sm ml-1 text-gray-500 line-through">$100</span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </section>
            {/* ----------------------------------------------------------------------- */}
            {/*                              ICONS SECTION                              */}
            {/* ----------------------------------------------------------------------- */}
            <section className="my-20">
                <div className="max-w-6xl px-5 mx-auto">
                    <p className="text-2xl font-bold mb-5">Why we are different</p>
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        <div className="p-5 bg-background rounded-lg border">
                            <div className="mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-primary-foreground" viewBox="0 0 48 48">
                                    <path
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6.3 42.5h34.1m-34-2l7-.2l-.5-34.7l-6.3-.1Zm8.6-27l-.3 26.3l6.5-.2l.8-25.9Zm9-5.6l-1.4 32.2l8.7-.1L33 8.4Zm10 6.3l-1.5 26.3l7.8.1l1.4-26.3Zm1 0a8.5 8.5 0 0 1 5.7-3.7M12.9 5.6L14.8 9l.1 4.6m-1.5 26.7l1.3-.5"
                                    />
                                </svg>
                            </div>
                            <h3 className="font-semibold mb-2">Better contents</h3>
                            <p className="text-muted-foreground text-gray-500 text-sm">Modern and effective literary techniques</p>
                        </div>
                        <div className="p-5 bg-background rounded-lg border">
                            <div className="mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-primary-foreground" viewBox="0 0 32 32">
                                    <path fill="currentColor" d="m20 20l1.4 1.4l-2.6 2.6H28v2h-9.2l2.6 2.6L20 30l-5-5zm-6-5h8v2h-8zm0-7h8v2h-8z" />
                                    <path fill="currentColor" d="M13 28H8v-4h2v-2H8v-5h2v-2H8v-5h2V8H8V4h18v16h2V4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v4H4v2h2v5H4v2h2v5H4v2h2v4c0 1.1.9 2 2 2h5z" />
                                </svg>
                            </div>
                            <h3 className="font-semibold mb-2">Publish with our editorial</h3>
                            <p className="text-muted-foreground text-gray-500 text-sm">If you have talent we will publish you</p>
                        </div>
                        <div className="p-5 bg-background rounded-lg border">
                            <div className="mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-primary-foreground" viewBox="0 0 50 50">
                                    <g fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}>
                                        <path stroke="#306cfe" d="m35.417 43.75l-3.625-12.5zm-20.834 0l3.625-12.5zM25 8.333V6.25zm4.167 12.5a4.167 4.167 0 1 0-8.334 0a4.167 4.167 0 0 0 8.334 0" />
                                        <path stroke="#344054" d="M25 33.333c6.904 0 12.5-5.596 12.5-12.5c0-6.903-5.596-12.5-12.5-12.5s-12.5 5.597-12.5 12.5c0 6.904 5.596 12.5 12.5 12.5" />
                                    </g>
                                </svg>
                            </div>
                            <h3 className="font-semibold mb-2">Smart Bookit</h3>
                            <p className="text-muted-foreground text-gray-500 text-sm">Write your novel faster with our AI tool.</p>
                        </div>
                        <div className="p-5 bg-background rounded-lg border">
                            <div className="mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-primary-foreground" viewBox="0 0 24 24">
                                    <path
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 1 1 7.072 0l-.548.547A3.374 3.374 0 0 0 14 18.469V19a2 2 0 1 1-4 0v-.531c0-.895-.356-1.754-.988-2.386z"
                                    />
                                </svg>
                            </div>
                            <h3 className="font-semibold mb-2">100% satisfaction</h3>
                            <p className="text-muted-foreground text-gray-500 text-sm">Try free before you buy. Then when you buy, you will love the school.</p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}

export default Homepage;
