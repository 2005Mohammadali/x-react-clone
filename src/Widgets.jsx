import { Card } from "./Card"
import { Button } from "./Button"
export function Widgets() {
    return (
        <div className="w-64 h-screen bg-black flex flex-col flex-3 p-4 gap-3 ml-5 mr-15 sticky top-0">
            <div className="flex items-center gap-2 bg-transparent rounded-full p-2 border border-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
                <input type="text" placeholder="Search..." className="bg-transparent outline-none flex-1" />
            </div>
            <Card title={"Subscribe to Premium"}>
                <div className="flex flex-col gap-3 pl-5 pb-4 pr-5">
                    <p className="text-sm">Subscribe to unlock new features and if eligible, receive a share of revenue.</p>
                    <Button title={"Subscribe"} styles={"w-[40%] px-3 py-1.5"} />
                </div>
            </Card>
            <Card title={"What\'s happening"}>
                {/* trendComponent */}
                <div className="flex cursor-pointer px-5 py-2 text-base hover:bg-[#40444d20]">
                    <div className=" flex-1">
                        <p className="text-sm text-gray-500">Trending</p>
                        <p className="font-bold">John Doe</p>
                        <p className="text-sm text-gray-500">1,016 posts</p>
                    </div>
                    {/* moreButton */}
                    <div className="text-gray-500 w-9 h-9">
                        <svg className="rounded-full hover:bg-[#3db7f61f] hover:text-[#3cb8f9] p-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                        </svg>
                    </div>
                </div>
                <p className={"text-base bg-transparent hover:bg-[#40444d20] cursor-pointer px-5 py-4 text-sky-600"}>Show More</p>
            </Card>
            <Card title={"Who to follow"}>
                {/* userRecommend */}
                <div className="flex items-center cursor-pointer gap-3 px-5 py-2 hover:bg-[#40444d20]">
                    <img className="h-12 w-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1767111389663-bbbe59f7413f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8" alt="John Doe" />
                    <div className=" flex-1">
                        <p className="text-base font-bold hover:underline">John Doe</p>
                        <p className="text-sm text-gray-500">@johndoe</p>
                    </div>
                    <div className="">
                        <Button title={"Follow"} styles={"bg-white text-sm text-black px-4 py-2 hover:bg-white"} />
                    </div>
                </div>
                <p className={"text-base bg-transparent hover:bg-[#40444d20] cursor-pointer px-5 py-4 text-sky-600"}>Show More</p>
            </Card>
        </div>
    )
}