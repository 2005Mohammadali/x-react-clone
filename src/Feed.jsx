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

            <Post avatarImg={"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"} name={"Christopher Campbell"} username={"@chris_campbell"} caption={"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."} media={"https://images.unsplash.com/photo-1673006768521-1f5f2ed92b41?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c29jaWFsJTIwbWVkaWElMjBwb3N0fGVufDB8fDB8fHww"} mediaType={"image"}/>

            <Post avatarImg={"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"} name={"Alex Johnson"} username={"@alex_johnson"} caption={"Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus."}/>

            <Post avatarImg={"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"} name={"Taylor Swift"} username={"@taylor_swift"} caption={"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."} media={"https://images.unsplash.com/photo-1750650506374-e29b5c996ad7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG9zdHN8ZW58MHx8MHx8fDA%3D"} mediaType={"image"}/>

            <Post avatarImg={"https://plus.unsplash.com/premium_photo-1689977807477-a579eda91fa2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"} name={"Michael Jordan"} username={"@michael_jordan"} caption={"Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus."} media={"https://images.unsplash.com/photo-1568454537842-d933259bb258?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dHJla2tpbmd8ZW58MHx8MHx8fDA%3D"} mediaType={"image"}/>

            <Post avatarImg={"https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"} name={"Emma Watson"} username={"@emma_watson"} caption={"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."} media={"https://plus.unsplash.com/premium_photo-1664910806127-d52cb0e0d091?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGZpdG5lc3N8ZW58MHx8MHx8fDA%3D"} mediaType={"image"}/>

            <Post avatarImg={"https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"} name={"Tom Hanks"} username={"@tom_hanks"} caption={"Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus."} media={"https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Zml0bmVzc3xlbnwwfHwwfHx8MA%3D%3D"} mediaType={"image"}/>

            <Post avatarImg={"https://images.unsplash.com/photo-1532074205216-d0e1f4b87368?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"} name={"Scarlett Johansson"} username={"@scarlett_johansson"} media={"https://pixabay.com/videos/download/x-293085_medium.mp4"} mediaType={"video"}/>

            <Post avatarImg={"https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"} name={"John Doe"} username={"@john_doe"} caption={"Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus."} media={"https://pixabay.com/videos/download/x-323513_medium.mp4"} mediaType={"video"}/>

            <Post avatarImg={"https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D"} name={"Jane Smith"} username={"@jane_smith"} media={"https://pixabay.com/videos/download/x-110924_medium.mp4"} mediaType={"video"}/>

            <Post avatarImg={"https://plus.unsplash.com/premium_photo-1678197937465-bdbc4ed95815?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGVyc29ufGVufDB8fDB8fHww"} name={"Robert Brown"} username={"@robert_brown"} caption={"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."}/>
        </div>
    )
}