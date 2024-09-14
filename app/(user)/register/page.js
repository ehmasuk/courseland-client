"use client";

import { Button, Form, message } from "antd";
import FormItem from "antd/es/form/FormItem";
import axios from "axios";
import Link from "next/link";

function Register() {
    const handleSubmit = async (values) => {
        try {
            await axios.post(process.env.NEXT_PUBLIC_API_URL + "/api/users/register", values,{ 
                withCredentials: true,
            } );
            message.success("Login successful");
            // window.location.reload();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <section className="bg-gray-50 dark:bg-gray-900">
            <div className="py-10">
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md mx-auto ">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8 mx-auto">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">Create an account</h1>

                        <Form onFinish={handleSubmit}>
                            <div className="space-y-4 md:space-y-6">
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
                                        Your name
                                    </label>
                                    <FormItem name="name" rules={[{ required: true, message: "Name is required" }]}>
                                        <input
                                            type="text"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 "
                                            placeholder="John doe"
                                        />
                                    </FormItem>
                                </div>
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
                                        Your email
                                    </label>
                                    <FormItem name="email" rules={[{ required: true, message: "Email is required" }]}>
                                        <input
                                            type="email"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 "
                                            placeholder="name@company.com"
                                        />
                                    </FormItem>
                                </div>
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">
                                        Password
                                    </label>
                                    <FormItem name="password" rules={[{ required: true, message: "Password is required" }]}>
                                        <input
                                            type="password"
                                            placeholder="••••••••"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 "
                                        />
                                    </FormItem>
                                </div>

                                <Button htmlType="submit" type="primary" className="w-full">
                                    Create an account
                                </Button>
                                <div className="text-sm  text-gray-800">
                                    Already have an account?
                                    <Link href="/login" className="font-medium text-blue-600 hover:underline">
                                        Login here
                                    </Link>
                                </div>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Register;
