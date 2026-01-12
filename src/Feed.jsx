import { Post } from "./Post"
import "./Feed.css"
export function Feed(){
    return(
        <div className="w-64 h-screen bg-black flex-6 overflow-y-scroll no-scrollbar border-x border-gray-700">
            <div className="w-full bg-black cursor-pointer z-10 flex items-center text-center justify-around sticky top-0">
                <div className="px-6 py-4 flex-1 font-medium hover:bg-[#40444d5e]">
                    <h1>For you</h1>
                </div>
                <div className="px-6 py-4 flex-1 font-medium hover:bg-[#40444d5e]">
                    <h1>Following</h1>
                </div>
            </div>
            <Post></Post>
            <Post></Post>
            <Post></Post>
            <Post></Post>
        </div>
    )
}