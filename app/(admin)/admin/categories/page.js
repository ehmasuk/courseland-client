import AddCategory from "@/components/AddCategory";
import HandleDeleteBtn from "@/components/HandleDeleteBtn";


const getAllCategories = async () => {
    const res = await fetch(process.env.DOMAIN + "/api/categories");
    return await res.json();
};

async function Categories() {
    const categories = await getAllCategories();

    return (
        <div>
            <AddCategory />
            <p className="font-semibold mb-3">Categories</p>
            <div className="space-y-2">
                <div className="overflow-x-auto">
                    <table className="min-w-80 min-h-14 divide-y-2 divide-gray-200 bg-white text-sm">
                        <thead className="ltr:text-left rtl:text-right">
                            <tr>
                                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">#</th>
                                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Name</th>
                                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Slug</th>
                                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Action</th>
                            </tr>
                        </thead>

                        <tbody className="divide-y divide-gray-200">
                            {categories?.map((cat, index) => {
                                return (
                                    <tr key={cat._id} className="text-center">
                                        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">{index + 1}</td>
                                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">{cat.name}</td>
                                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">{cat.slug}</td>
                                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                                            <HandleDeleteBtn url={process.env.DOMAIN + "/api/categories/"+ cat._id } id={cat._id} />
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Categories;
