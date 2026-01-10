import { Post } from "./Post"
export function Feed(){
    return(
        <div className="w-64 h-screen bg-black flex-6 overflow-y-scroll border-x border-gray-700">
            <div className="w-full bg-black cursor-pointer z-10 flex items-center text-center justify-around">
                <div className="px-6 py-4 font-medium hover:bg-[#40444d5e]">
                    <h1>For you</h1>
                </div>
                <h1 className="hover:bg-[#40444d5e]">Following</h1>
            </div>
            <Post></Post>
            <Post></Post>
            <Post></Post>
            <Post></Post>
        </div>
    )
}