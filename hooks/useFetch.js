export async function useFetch(url, token) {
    const res = await fetch(process.env.DOMAIN + url, {
        headers: {
            token: token || null,
        },
    });
    if (!res.ok) {
        throw new Error("Cannot fetch " + process.env.DOMAIN + url);
    }
    return await res.json();
}
