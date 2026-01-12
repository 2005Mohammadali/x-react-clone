import { Icons } from "./Icons";
export function Trend({trendIn, topic, posts}) {
    return(
        <div className="flex cursor-pointer px-5 py-2 text-base hover:bg-[#40444d20]">
            <div className=" flex-1">
                <p className="text-sm text-gray-500">{trendIn}</p>
                <p className="font-bold">{topic}</p>
                <p className="text-sm text-gray-500">{posts}</p>
            </div>
            <Icons iconStyle={"hover:bg-[#3db7f61f]"} valueStyle={"hover:text-[#3cb8f9]"}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                </svg>
            </Icons>
        </div>
    )
}