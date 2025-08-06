import { Post } from "./Post"
export function Feed(){
    return(
        <div className="w-64 h-screen bg-black flex-5 overflow-y-scroll border-x border-white">
            <div className="w-full bg-black cursor-pointer z-10 flex items-center text-center justify-around p-6 hover:bg-gray-800">
                <h1>Home</h1>
                <h1>Following</h1>
            </div>
            <Post></Post>
            <Post></Post>
        </div>
    )
}