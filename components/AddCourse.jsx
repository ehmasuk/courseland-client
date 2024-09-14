"use client";

import useFetchPost from "@/hooks/useFetchPost";
import { Button, Form, message, Upload } from "antd";
import FormItem from "antd/es/form/FormItem";
import { useRouter } from "next/navigation";

function AddCourse({ categories }) {
    const [form] = Form.useForm();

    const { postData, loading } = useFetchPost();

    const router = useRouter()

    const handleFinish = async (values) => {
        message.loading({ content: "Adding new course...", key: 1 });

        try {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(values.image.fileList[0].originFileObj);
            fileReader.onload = () => {
                const base64 = fileReader.result;
                postData(
                    "/api/courses",
                    { ...values, image: base64 },
                    () => {
                        form.resetFields();
                        message.destroy(1);
                        message.success("Course added successfully");
                        router.refresh()
                    },
                    (err) => {
                        console.log(err);
                        message.destroy(1);
                        message.error(err);
                    }
                );
            };
        } catch (error) {
            console.log(error);
            message.error("Cannot read image file");
        }
    };

    return (
        <Form form={form} onFinish={handleFinish}>
            <div className="grid lg:grid-cols-2 gap-10">
                <div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Course name</label>
                        <FormItem name="title">
                            <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="name@company.com" />
                        </FormItem>
                    </div>
                    <div>
                        <label for="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Description
                        </label>

                        <FormItem name="description">
                            <textarea rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300" placeholder="Description..."></textarea>
                        </FormItem>
                    </div>
                </div>
                <div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Image</label>
                        <FormItem name="image">
                            <Upload beforeUpload={() => false} maxCount={1}>
                                <Button>Click to Upload</Button>
                            </Upload>
                        </FormItem>
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
                        <FormItem name="price">
                            <input type="number" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" />
                        </FormItem>
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select a category</label>
                        <FormItem name="categoryId">
                            <select
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            >
                                <option selected>Choose a category</option>

                                {categories?.map((cat) => {
                                    return (
                                        <option key={cat._id} value={cat._id}>
                                            {cat.name}
                                        </option>
                                    );
                                })}
                            </select>
                        </FormItem>
                    </div>
                </div>
            </div>

            <Button htmlType="submit" type="primary" loading={loading}>
                Submit
            </Button>
        </Form>
    );
}

export default AddCourse;
