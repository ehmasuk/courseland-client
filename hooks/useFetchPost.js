"use client";

import { useState } from "react";

function useFetchPost() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(null);

    const postData = async (url, data, onSuccess, onError) => {
        setLoading(true);
        try {
            const res = await fetch(url, { method: "POST", body: JSON.stringify(data) });
            data = await res.json();
            if (!res.ok) {
                throw new Error(data.message);
            }
            setData(data);
            onSuccess && onSuccess();
        } catch (error) {
            onError && onError(error.message);
        } finally {
            setLoading(false);
        }
    };

    return { data, postData, loading };
}

export default useFetchPost;
