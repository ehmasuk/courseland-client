

import { useFetch } from "@/hooks/useFetch";
import { cookies } from "next/headers";

async function ProfilePage() {
    // const data = await useFetch('/api/users/me',cookies().get('token')?.value)
    const data = {}

    return (
        <div className="">
            <main className="grid grid-cols-1 lg:grid-cols-6 gap-6 my-12 max-w-screen-xl px-2 mx-auto">
                <aside className="col-span-2">
                    <div className="bg-white shadow rounded-lg p-10">
                        <div className="flex flex-col gap-1 text-center items-center">
                            <img
                                className="h-32 w-32 bg-white p-2 rounded-full shadow mb-4"
                                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
                                alt
                            />
                            <p className="font-semibold">{data?.name}</p>
                            <div className="text-sm leading-normal text-gray-400 flex justify-center items-center">
                                <svg viewBox="0 0 24 24" className="mr-1" width={16} height={16} stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                    <circle cx={12} cy={10} r={3} />
                                </svg>
                                Los Angeles, California
                            </div>
                        </div>
                        <div className="flex justify-center items-center gap-2 my-3">
                            <div className="font-semibold text-center mx-4">
                                <p className="text-black">102</p>
                                <span className="text-gray-400">Posts</span>
                            </div>
                            <div className="font-semibold text-center mx-4">
                                <p className="text-black">102</p>
                                <span className="text-gray-400">Followers</span>
                            </div>
                            <div className="font-semibold text-center mx-4">
                                <p className="text-black">102</p>
                                <span className="text-gray-400">Folowing</span>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white shadow mt-6  rounded-lg p-6">
                        <h3 className="text-gray-600 text-sm font-semibold mb-4">Following</h3>
                        <ul className="flex items-center justify-center space-x-2">
                            {/* Story #1 */}
                            <li className="flex flex-col items-center space-y-2">
                                {/* Ring */}
                                <a className="block bg-white p-1 rounded-full" href="#">
                                    <img
                                        className="w-16 rounded-full"
                                        src="https://images.unsplash.com/photo-1638612913771-8f00622b96fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200&q=80"
                                    />
                                </a>
                                {/* Username */}
                                <span className="text-xs text-gray-500">Sage</span>
                            </li>
                            {/* Story #1 */}
                            <li className="flex flex-col items-center space-y-2">
                                {/* Ring */}
                                <a className="block bg-white p-1 rounded-full" href="#">
                                    <img
                                        className="w-16 rounded-full"
                                        src="https://images.unsplash.com/photo-1638649602320-450b717fa622?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200&q=80"
                                    />
                                </a>
                                {/* Username */}
                                <span className="text-xs text-gray-500">Jett</span>
                            </li>
                            {/* Story #2 */}
                            <li className="flex flex-col items-center space-y-2">
                                {/* Ring */}
                                <a className="block bg-white p-1 rounded-full" href="#">
                                    {/* Thumbnail */}
                                    <img
                                        className="w-16 rounded-full"
                                        src="https://images.unsplash.com/photo-1638708644743-2502f38000a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200&q=80"
                                    />
                                </a>
                                {/* Username */}
                                <span className="text-xs text-gray-500">Sky</span>
                            </li>
                            {/* Story #3 */}
                            <li className="flex flex-col items-center space-y-2">
                                {/* Ring */}
                                <a className="block bg-white p-1 rounded-full" href="#">
                                    {/* Thumbnail */}
                                    <img
                                        className="w-16 rounded-full"
                                        src="https://images.unsplash.com/photo-1638691899851-0e955bceba1f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200&q=80"
                                    />
                                </a>
                                {/* Username */}
                                <span className="text-xs text-gray-500">Olivia</span>
                            </li>
                            {/* Story #4 */}
                            <li className="flex flex-col items-center space-y-2">
                                {/* Ring */}
                                <a className="block bg-white p-1 rounded-full" href="#">
                                    <img
                                        className="w-16 rounded-full"
                                        src="https://images.unsplash.com/photo-1638612913771-8f00622b96fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200&q=80"
                                    />
                                </a>
                                {/* Username */}
                                <span className="text-xs text-gray-500">Julia</span>
                            </li>
                            {/* Story #1 */}
                            <li className="flex flex-col items-center space-y-2">
                                {/* Ring */}
                                <a className="block bg-white p-1 rounded-full" href="#">
                                    {/* Thumbnail */}
                                    <img
                                        className="w-16 rounded-full"
                                        src="https://images.unsplash.com/photo-1638649602320-450b717fa622?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200&q=80"
                                    />
                                </a>
                                {/* Username */}
                                <span className="text-xs text-gray-500">Hendrick</span>
                            </li>
                        </ul>
                    </div>
                    <div className="flex bg-white shadow mt-6  rounded-lg p-2">
                        <img
                            src="https://images.unsplash.com/photo-1439130490301-25e322d88054?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80"
                            alt="Just a flower"
                            className=" w-16  object-cover  h-16 rounded-xl"
                        />
                        <div className="flex flex-col justify-center w-full px-2 py-1">
                            <div className="flex justify-between items-center ">
                                <div className="flex flex-col">
                                    <h2 className="text-sm font-medium">Massive Dynamic</h2>
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 hover:text-blue-400 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                                </svg>
                            </div>
                            <div className="flex pt-2  text-sm text-gray-400">
                                <div className="flex items-center mr-auto">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                    </svg>
                                    <p className="font-normal">4.5</p>
                                </div>
                                <div className="flex items-center font-medium text-gray-900 ">
                                    $1800
                                    <span className="text-gray-400 text-sm font-normal"> /wk</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </aside>
                <article className="col-span-4">
                    <form className="bg-white shadow rounded-lg mb-6 p-4">
                        <textarea
                            name="message"
                            placeholder="Type something..."
                            className="w-full rounded-lg p-2 text-sm bg-gray-100 border border-transparent appearance-none rounded-tg placeholder-gray-400"
                            defaultValue={""}
                        />
                        <footer className="flex justify-between mt-2">
                            <div className="flex gap-2">
                                <span className="flex items-center transition ease-out duration-300 hover:bg-blue-500 hover:text-white bg-blue-100 w-8 h-8 px-2 rounded-full text-blue-400 cursor-pointer">
                                    <svg
                                        viewBox="0 0 24 24"
                                        width={24}
                                        height={24}
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        fill="none"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="css-i6dzq1"
                                    >
                                        <rect x={3} y={3} width={18} height={18} rx={2} ry={2} />
                                        <circle cx="8.5" cy="8.5" r="1.5" />
                                        <polyline points="21 15 16 10 5 21" />
                                    </svg>
                                </span>
                                <span className="flex items-center transition ease-out duration-300 hover:bg-blue-500 hover:text-white bg-blue-100 w-8 h-8 px-2 rounded-full text-blue-400 cursor-pointer">
                                    <svg
                                        viewBox="0 0 24 24"
                                        width={24}
                                        height={24}
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        fill="none"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="css-i6dzq1"
                                    >
                                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                        <circle cx={12} cy={10} r={3} />
                                    </svg>
                                </span>
                                <span className="flex items-center transition ease-out duration-300 hover:bg-blue-500 hover:text-white bg-blue-100 w-8 h-8 px-2 rounded-full text-blue-400 cursor-pointer">
                                    <svg
                                        viewBox="0 0 24 24"
                                        width={24}
                                        height={24}
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        fill="none"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="css-i6dzq1"
                                    >
                                        <polyline points="4 17 10 11 4 5" />
                                        <line x1={12} y1={19} x2={20} y2={19} />
                                    </svg>
                                </span>
                            </div>
                            <button className="flex items-center py-2 px-4 rounded-lg text-sm bg-blue-600 text-white shadow-lg">
                                Send
                                <svg className="ml-1" viewBox="0 0 24 24" width={16} height={16} stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1={22} y1={2} x2={11} y2={13} />
                                    <polygon points="22 2 15 22 11 13 2 9 22 2" />
                                </svg>
                            </button>
                        </footer>
                    </form>
                    <div className="bg-white shadow rounded-lg mb-6">
                        <div className="flex flex-row px-2 py-3 mx-3">
                            <div className="w-auto h-auto rounded-full">
                                <img
                                    className="w-12 h-12 object-cover rounded-full shadow cursor-pointer"
                                    alt="User avatar"
                                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
                                />
                            </div>
                            <div className="flex flex-col mb-2 ml-4 mt-1">
                                <div className="text-gray-600 text-sm font-semibold">John Doe</div>
                                <div className="flex w-full mt-1">
                                    <div className="text-blue-700 font-base text-xs mr-1 cursor-pointer">SEO</div>
                                    <div className="text-gray-400 font-thin text-xs">• 30 seconds ago</div>
                                </div>
                            </div>
                        </div>
                        <div className="border-b border-gray-100" />
                        <div className="text-gray-400 font-medium text-sm mb-7 mt-6 mx-3 px-2">
                            <div className="grid grid-cols-6 col-span-2   gap-2  ">
                                <div className=" overflow-hidden rounded-xl col-span-3 max-h-[14rem]">
                                    <img
                                        className="h-full w-full object-cover "
                                        src="https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
                                        alt
                                    />
                                </div>
                                <div className=" overflow-hidden rounded-xl col-span-3 max-h-[14rem]">
                                    <img
                                        className="h-full w-full object-cover  "
                                        src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1399&q=80"
                                        alt
                                    />
                                </div>
                                <div className=" overflow-hidden rounded-xl col-span-2 max-h-[10rem]">
                                    <img
                                        className="h-full w-full object-cover "
                                        src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                                        alt
                                    />
                                </div>
                                <div className=" overflow-hidden rounded-xl col-span-2 max-h-[10rem]">
                                    <img
                                        className="h-full w-full object-cover "
                                        src="https://images.unsplash.com/photo-1503602642458-232111445657?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                                        alt
                                    />
                                </div>
                                <div className="relative overflow-hidden rounded-xl col-span-2 max-h-[10rem]">
                                    <div className="text-white text-xl absolute inset-0  bg-slate-900/80 flex justify-center items-center">+ 23</div>
                                    <img
                                        className="h-full w-full object-cover "
                                        src="https://images.unsplash.com/photo-1560393464-5c69a73c5770?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80"
                                        alt
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="text-gray-500 text-sm mb-6 mx-3 px-2">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500
                        </div>
                        <div className="flex justify-start mb-4 border-t border-gray-100">
                            <div className="flex w-full mt-1 pt-2 pl-5">
                                <span className="bg-white transition ease-out duration-300 hover:text-red-500 border w-8 h-8 px-2 pt-2 text-center rounded-full text-gray-400 cursor-pointer mr-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="14px" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                                    </svg>
                                </span>
                                <img
                                    className="inline-block object-cover w-8 h-8 text-white border-2 border-white rounded-full shadow-sm cursor-pointer"
                                    src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                    alt
                                />
                                <img
                                    className="inline-block object-cover w-8 h-8 -ml-2 text-white border-2 border-white rounded-full shadow-sm cursor-pointer"
                                    src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                    alt
                                />
                                <img
                                    className="inline-block object-cover w-8 h-8 -ml-2 text-white border-2 border-white rounded-full shadow-sm cursor-pointer"
                                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                                    alt
                                />
                                <img
                                    className="inline-block object-cover w-8 h-8 -ml-2 text-white border-2 border-white rounded-full shadow-sm cursor-pointer"
                                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                                    alt
                                />
                            </div>
                            <div className="flex justify-end w-full mt-1 pt-2 pr-5">
                                <span className="transition ease-out duration-300 hover:bg-blue-50 bg-blue-100 w-8 h-8 px-2 py-2 text-center rounded-full text-blue-400 cursor-pointer mr-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="14px" viewBox="0 0 24 24" stroke="currentColor">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                                        />
                                    </svg>
                                </span>
                                <span className="transition ease-out duration-300 hover:bg-gray-50 bg-gray-100 h-8 px-2 py-2 text-center rounded-full text-gray-100 cursor-pointer">
                                    <svg className="h-4 w-4 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"
                                        />
                                    </svg>
                                </span>
                            </div>
                        </div>
                        <div className="flex w-full border-t border-gray-100">
                            <div className="mt-3 mx-5 flex flex-row text-xs">
                                <div className="flex text-gray-700 font-normal rounded-md mb-2 mr-4 items-center">
                                    Comments:<div className="ml-1 text-gray-400 text-ms"> 30</div>
                                </div>
                                <div className="flex text-gray-700 font-normal rounded-md mb-2 mr-4 items-center">
                                    Views: <div className="ml-1 text-gray-400 text-ms"> 60k</div>
                                </div>
                            </div>
                            <div className="mt-3 mx-5 w-full flex justify-end text-xs">
                                <div className="flex text-gray-700  rounded-md mb-2 mr-4 items-center">
                                    Likes: <div className="ml-1 text-gray-400  text-ms"> 120k</div>
                                </div>
                            </div>
                        </div>
                        <div className="text-black p-4 antialiased flex">
                            <img className="rounded-full h-8 w-8 mr-2 mt-1 " src="https://picsum.photos/id/1027/200/200" />
                            <div>
                                <div className="bg-gray-100 rounded-lg px-4 pt-2 pb-2.5">
                                    <div className="font-semibold text-sm leading-relaxed">Sara Lauren</div>
                                    <div className="text-xs leading-snug md:leading-normal">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </div>
                                </div>
                                <div className="text-xs  mt-0.5 text-gray-500">14 w</div>
                                <div className="bg-white border border-white rounded-full float-right -mt-8 mr-0.5 flex shadow items-center ">
                                    <svg className="p-0.5 h-5 w-5 rounded-full z-20 bg-white" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16">
                                        <defs>
                                            <linearGradient id="a1" x1="50%" x2="50%" y1="0%" y2="100%">
                                                <stop offset="0%" stopColor="#18AFFF" />
                                                <stop offset="100%" stopColor="#0062DF" />
                                            </linearGradient>
                                            <filter id="c1" width="118.8%" height="118.8%" x="-9.4%" y="-9.4%" filterUnits="objectBoundingBox">
                                                <feGaussianBlur in="SourceAlpha" result="shadowBlurInner1" stdDeviation={1} />
                                                <feOffset dy={-1} in="shadowBlurInner1" result="shadowOffsetInner1" />
                                                <feComposite in="shadowOffsetInner1" in2="SourceAlpha" k2={-1} k3={1} operator="arithmetic" result="shadowInnerInner1" />
                                                <feColorMatrix in="shadowInnerInner1" values="0 0 0 0 0 0 0 0 0 0.299356041 0 0 0 0 0.681187726 0 0 0 0.3495684 0" />
                                            </filter>
                                            <path id="b1" d="M8 0a8 8 0 00-8 8 8 8 0 1016 0 8 8 0 00-8-8z" />
                                        </defs>
                                        <g fill="none">
                                            <use fill="url(#a1)" xlinkHref="#b1" />
                                            <use fill="black" filter="url(#c1)" xlinkHref="#b1" />
                                            <path
                                                fill="white"
                                                d="M12.162 7.338c.176.123.338.245.338.674 0 .43-.229.604-.474.725a.73.73 0 01.089.546c-.077.344-.392.611-.672.69.121.194.159.385.015.62-.185.295-.346.407-1.058.407H7.5c-.988 0-1.5-.546-1.5-1V7.665c0-1.23 1.467-2.275 1.467-3.13L7.361 3.47c-.005-.065.008-.224.058-.27.08-.079.301-.2.635-.2.218 0 .363.041.534.123.581.277.732.978.732 1.542 0 .271-.414 1.083-.47 1.364 0 0 .867-.192 1.879-.199 1.061-.006 1.749.19 1.749.842 0 .261-.219.523-.316.666zM3.6 7h.8a.6.6 0 01.6.6v3.8a.6.6 0 01-.6.6h-.8a.6.6 0 01-.6-.6V7.6a.6.6 0 01.6-.6z"
                                            />
                                        </g>
                                    </svg>
                                    <svg className="p-0.5 h-5 w-5 rounded-full -ml-1.5 bg-white" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16">
                                        <defs>
                                            <linearGradient id="a2" x1="50%" x2="50%" y1="0%" y2="100%">
                                                <stop offset="0%" stopColor="#FF6680" />
                                                <stop offset="100%" stopColor="#E61739" />
                                            </linearGradient>
                                            <filter id="c2" width="118.8%" height="118.8%" x="-9.4%" y="-9.4%" filterUnits="objectBoundingBox">
                                                <feGaussianBlur in="SourceAlpha" result="shadowBlurInner1" stdDeviation={1} />
                                                <feOffset dy={-1} in="shadowBlurInner1" result="shadowOffsetInner1" />
                                                <feComposite in="shadowOffsetInner1" in2="SourceAlpha" k2={-1} k3={1} operator="arithmetic" result="shadowInnerInner1" />
                                                <feColorMatrix in="shadowInnerInner1" values="0 0 0 0 0.710144928 0 0 0 0 0 0 0 0 0 0.117780134 0 0 0 0.349786932 0" />
                                            </filter>
                                            <path id="b2" d="M8 0a8 8 0 100 16A8 8 0 008 0z" />
                                        </defs>
                                        <g fill="none">
                                            <use fill="url(#a2)" xlinkHref="#b2" />
                                            <use fill="black" filter="url(#c2)" xlinkHref="#b2" />
                                            <path
                                                fill="white"
                                                d="M10.473 4C8.275 4 8 5.824 8 5.824S7.726 4 5.528 4c-2.114 0-2.73 2.222-2.472 3.41C3.736 10.55 8 12.75 8 12.75s4.265-2.2 4.945-5.34c.257-1.188-.36-3.41-2.472-3.41"
                                            />
                                        </g>
                                    </svg>
                                    <span className="text-sm ml-1 pr-1.5 text-gray-500">3</span>
                                </div>
                            </div>
                        </div>
                        <div className="relative flex items-center self-center w-full max-w-xl p-4 overflow-hidden text-gray-600 focus-within:text-gray-400">
                            <img
                                className="w-10 h-10 object-cover rounded-full shadow mr-2 cursor-pointer"
                                alt="User avatar"
                                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
                            />
                            <span className="absolute inset-y-0 right-0 flex items-center pr-6">
                                <button type="submit" className="p-1 focus:outline-none focus:shadow-none hover:text-blue-500">
                                    <svg
                                        className="w-6 h-6 transition ease-out duration-300 hover:text-blue-500 text-gray-400"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </button>
                            </span>
                            <input
                                type="search"
                                className="w-full py-2 pl-4 pr-10 text-sm bg-gray-100 border border-transparent appearance-none rounded-tg placeholder-gray-400"
                                style={{ borderRadius: 25 }}
                                placeholder="Post a comment..."
                                autoComplete="off"
                            />
                        </div>
                    </div>
                    <div className="bg-white shadow rounded-lg">
                        <div className="flex flex-row px-2 py-3 mx-3">
                            <div className="w-auto h-auto rounded-full border-2 border-green-500">
                                <img
                                    className="w-12 h-12 object-cover rounded-full shadow cursor-pointer"
                                    alt="User avatar"
                                    src="https://images.unsplash.com/photo-1477118476589-bff2c5c4cfbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=200"
                                />
                            </div>
                            <div className="flex flex-col mb-2 ml-4 mt-1">
                                <div className="text-gray-600 text-sm font-semibold">Sara Lauren</div>
                                <div className="flex w-full mt-1">
                                    <div className="text-blue-700 font-base text-xs mr-1 cursor-pointer">UX Design</div>
                                    <div className="text-gray-400 font-thin text-xs">• 1 day ago</div>
                                </div>
                            </div>
                        </div>
                        <div className="border-b border-gray-100" />
                        <div className="text-gray-400 font-medium text-sm mb-7 mt-6 mx-3 px-2">
                            <img className="rounded w-full" src="https://picsum.photos/536/354" />
                        </div>
                        <div className="text-gray-600 font-semibold  mb-2 mx-3 px-2">Dummy text of the printing and typesetting industry</div>
                        <div className="text-gray-500 text-sm mb-6 mx-3 px-2">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500
                        </div>
                        <div className="flex justify-start mb-4 border-t border-gray-100">
                            <div className="flex w-full mt-1 pt-2 pl-5">
                                <span className="bg-white transition ease-out duration-300 hover:text-red-500 border w-8 h-8 px-2 pt-2 text-center rounded-full text-gray-400 cursor-pointer mr-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="14px" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                                    </svg>
                                </span>
                                <img
                                    className="inline-block object-cover w-8 h-8 text-white border-2 border-white rounded-full shadow-sm cursor-pointer"
                                    src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                    alt
                                />
                                <img
                                    className="inline-block object-cover w-8 h-8 -ml-2 text-white border-2 border-white rounded-full shadow-sm cursor-pointer"
                                    src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                    alt
                                />
                                <img
                                    className="inline-block object-cover w-8 h-8 -ml-2 text-white border-2 border-white rounded-full shadow-sm cursor-pointer"
                                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                                    alt
                                />
                                <img
                                    className="inline-block object-cover w-8 h-8 -ml-2 text-white border-2 border-white rounded-full shadow-sm cursor-pointer"
                                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                                    alt
                                />
                            </div>
                            <div className="flex justify-end w-full mt-1 pt-2 pr-5">
                                <span className="transition ease-out duration-300 hover:bg-blue-50 bg-blue-100 w-8 h-8 px-2 py-2 text-center rounded-full text-blue-400 cursor-pointer mr-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="14px" viewBox="0 0 24 24" stroke="currentColor">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                                        />
                                    </svg>
                                </span>
                                <span className="transition ease-out duration-300 hover:bg-gray-50 bg-gray-100 h-8 px-2 py-2 text-center rounded-full text-gray-100 cursor-pointer">
                                    <svg className="h-4 w-4 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"
                                        />
                                    </svg>
                                </span>
                            </div>
                        </div>
                        <div className="flex w-full border-t border-gray-100">
                            <div className="mt-3 mx-5 flex flex-row text-xs">
                                <div className="flex text-gray-700 font-normal rounded-md mb-2 mr-4 items-center">
                                    Comments:<div className="ml-1 text-gray-400 text-ms"> 30</div>
                                </div>
                                <div className="flex text-gray-700 font-normal rounded-md mb-2 mr-4 items-center">
                                    Views: <div className="ml-1 text-gray-400 text-ms"> 60k</div>
                                </div>
                            </div>
                            <div className="mt-3 mx-5 w-full flex justify-end text-xs">
                                <div className="flex text-gray-700  rounded-md mb-2 mr-4 items-center">
                                    Likes: <div className="ml-1 text-gray-400 text-ms"> 120k</div>
                                </div>
                            </div>
                        </div>
                        <div className="relative flex items-center self-center w-full max-w-xl p-4 overflow-hidden text-gray-600 focus-within:text-gray-400">
                            <img
                                className="w-10 h-10 object-cover rounded-full shadow mr-2 cursor-pointer"
                                alt="User avatar"
                                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
                            />
                            <span className="absolute inset-y-0 right-0 flex items-center pr-6">
                                <button type="submit" className="p-1 focus:outline-none focus:shadow-none hover:text-blue-500">
                                    <svg
                                        className="w-6 h-6 transition ease-out duration-300 hover:text-blue-500 text-gray-400"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </button>
                            </span>
                            <input
                                type="search"
                                className="w-full py-2 pl-4 pr-10 text-sm bg-gray-100 border border-transparent appearance-none rounded-tg placeholder-gray-400 focus:bg-white focus:outline-none focus:border-blue-500 focus:text-gray-900 focus:shadow-outline-blue"
                                style={{ borderRadius: 25 }}
                                placeholder="Post a comment..."
                                autoComplete="off"
                            />
                        </div>
                    </div>
                </article>
            </main>
        </div>
    );
}

export default ProfilePage;
