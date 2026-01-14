import { Post } from "./Post"
import "./Feed.css"
export function Feed(){
    return(
        <div className="w-64 bg-black flex-6 relative">
            <div className="w-full bg-black/50 backdrop-blur-md border-x border-gray-700 cursor-pointer z-10 flex items-center text-center justify-around sticky top-0">
                <div className="px-6 py-4 flex-1 font-medium hover:bg-[#40444d5e] relative">
                    <div className="w-12 h-1 bg-blue-400 rounded-full absolute bottom-0 left-34"></div>
                    <h1>For you</h1>
                </div>
                <div className="px-6 py-4 flex-1 font-medium hover:bg-[#40444d5e]">
                    <h1>Following</h1>
                </div>
            </div>
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
        </div>
    )
}