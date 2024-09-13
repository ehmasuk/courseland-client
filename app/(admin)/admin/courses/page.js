"use client";

import AddCourse from "@/components/AddCourse";
import HandleDeleteBtn from "@/components/HandleDeleteBtn";
import Image from "next/image";
import { useEffect, useState } from "react";

function Courses() {
    const [categories, setCategories] = useState();
    const [courses, setCourses] = useState();

    const getData = async (url, busket) => {
        const res = await fetch(url);
        const data = await res.json();
        busket(data);
    };

    useEffect(() => {
        getData("/api/categories", setCategories);
        getData("/api/courses", setCourses);
    }, []);



    return (
        <div>
            <div className="w-full bg-white rounded-lg shadow md:mt-0 xl:p-0">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">Create a course</h1>
                    <div className="space-y-4 md:space-y-6">
                        <AddCourse categories={categories && categories} />
                    </div>
                </div>
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">All courses</h1>

                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="px-16 py-3">
                                        <span className="sr-only">Image</span>
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Title
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Price
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {courses?.map((course) => {
                                    return (
                                        <tr key={course._id} className="bg-white border-b hover:bg-gray-50 dark:hover:bg-gray-600">
                                            <td className="p-4">
                                                <Image width={80} height={30} src={course.image} className="max-w-full max-h-full" alt="Apple Watch" />
                                            </td>
                                            <td className="px-6 py-4 font-semibold text-gray-900">{course.title}</td>

                                            <td className="px-6 py-4 font-semibold text-gray-900">${course.price}</td>
                                            <td className="px-6 py-4">
                                                <HandleDeleteBtn url={`${process.env.NEXT_PUBLIC_API_URL}/api/courses/${course._id}`} id={course._id} />
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Courses;
