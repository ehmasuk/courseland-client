import { useFetch } from "@/hooks/useFetch";
import { Rate } from "antd";
import Image from "next/image";
import Link from "next/link";

async function Page() {
    const courses = await useFetch("/api/courses");

    return (
        <div className="max-w-screen-xl mx-auto py-10">
            <section>
                <form className="max-w-md mx-auto">
                    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
                        Search
                    </label>
                    <div className="relative">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </div>
                        <input
                            type="search"
                            id="default-search"
                            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Search Mockups, Logos..."
                            required
                        />
                        <button
                            type="submit"
                            className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            Search
                        </button>
                    </div>
                </form>
            </section>

            <section>
                <p className="text-lg mb-5 font-semibold">Filter by categories</p>
                <div className="flex flex-wrap gap-3">
                    <button className="px-3 py-1 text-sm rounded border border-gray-600 hover:border-blue-600 hover:text-blue-600 transition">All categories</button>
                </div>
            </section>

            <section>
                <div className="grid grid-cols-4 gap-5 py-5">
                    {courses?.map((course, idx) => (
                        <Link href={`/courses/${course.slug}`} key={idx} className="[&:hover_img]:shadow-xl">
                            <div className="w-full h-[200px] border">
                                <Image width={0} height={0} sizes="100%" className="w-full h-full object-cover" src={course.image} alt={course.title} />
                            </div>
                            <p className="text-md font-semibold my-2 line-clamp-2">{course.title}</p>
                            <p className="text-sm text-gray-600">Dr. elsa queen</p>
                            <div className="flex items-baseline text-sm gap-2 my-2">
                                <p className="text-orange-500 font-bold">4.7</p>
                                <Rate disabled className="[&_*]:text-sm !text-orange-500" defaultValue={4.7} />
                                <p className="text-gray-600">(23,08)</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <p className="font-semibold">${course.price}</p>
                                <del>$98</del>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default Page;
