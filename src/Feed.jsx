import { Post } from "./Post"
export function Feed(){
    return(
        <div className="w-64 h-screen bg-yellow-500 flex-5 overflow-y-scroll">
            <Post></Post>
        </div>
    )
}