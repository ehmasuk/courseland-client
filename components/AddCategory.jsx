"use client";

import useFetchPost from "@/hooks/useFetchPost";
import { Button, Form, Input, message } from "antd";
import FormItem from "antd/es/form/FormItem";
import { useRouter } from "next/navigation";

function AddCategory() {
    const { postData, loading } = useFetchPost();

    const router = useRouter();

    const [from] = Form.useForm();

    const handleSubmit = (values) => {
        postData(
            "/api/categories",
            values,
            () => {
                message.success("Category added");
                router.refresh();
                from.resetFields();
            },
            (err) => {
                message.error(err);
            }
        );
    };
    return (
        <div>
            <p className="mb-2">Add categories</p>
            <Form form={from} onFinish={handleSubmit}>
                <div className="flex gap-2">
                    <FormItem name="name">
                        <Input placeholder="Name" />
                    </FormItem>
                    <Button loading={loading} htmlType="submit" type="primary">
                        Add
                    </Button>
                </div>
            </Form>
        </div>
    );
}

export default AddCategory;
