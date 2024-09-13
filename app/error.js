"use client";

function error({ error, reset }) {
    return (
        <div className="p-5 shadow rounded absulte left-[40%] top-[10%]">
            <p className="text-red-500 mb-2">{error.message || "Something went wrong"}</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={() => reset()}>
                Try again
            </button>
        </div>
    );
}

export default error;
