import { Card } from "./Card"
import { Button } from "./Button"
import { UserRecommend } from "./UserRecommend";
import { Trend } from "./Trend";
export function Widgets() {
    return (
        <div className="w-64 bg-black flex flex-col flex-3 p-4 gap-3 ml-5 mr-15">
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
                <Trend trendIn={"Footbal-Trending"} topic={"#CR7"} posts={"13,891"}></Trend>
                <Trend trendIn={"Trending"} topic={"Zomato"} posts={"3,891"}></Trend>
                <Trend trendIn={"Politics-Trending"} topic={"#BMCElection2026"} posts={"8,891"}></Trend>
                <Trend trendIn={"Sports-Trending"} topic={"Virat Kohli"} posts={"2,918"}></Trend>
                <Trend trendIn={"Politics-Trending"} topic={"#PMCElection"} posts={"5,152"}></Trend>
                <p className={"text-base bg-transparent hover:bg-[#40444d20] cursor-pointer px-5 py-4 text-sky-600"}>Show More</p>
            </Card>
            <Card title={"Who to follow"}>
                <UserRecommend src="https://images.unsplash.com/photo-1767111389663-bbbe59f7413f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8" name="John Doe" username="@johndoe"></UserRecommend>
                <UserRecommend src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D" name="K L Rahul" username="@klrahul"></UserRecommend>
                <UserRecommend src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D" name="sonu sood" username="@sonusood"></UserRecommend>
                <p className={"text-base bg-transparent hover:bg-[#40444d20] cursor-pointer px-5 py-4 text-sky-600"}>Show More</p>
            </Card>
        </div>
    )
}