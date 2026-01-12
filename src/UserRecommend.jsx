import { Button } from "./Button"
export function UserRecommend({src, name, username}){
    return(
        <div className="flex items-center cursor-pointer justify-between px-5 py-2 hover:bg-[#40444d20]">
            <div className="flex items-center gap-2">
                <img className="h-12 w-12 rounded-full object-cover" src={src} alt={name} />
                <div className=" flex-1">
                    <p className="text-base font-bold hover:underline">{name}</p>
                    <p className="text-sm text-gray-500">{username}</p>
                </div>
            </div>
            <div className="">
                <Button title={"Follow"} styles={"bg-white text-sm text-black px-4 py-2 hover:bg-white"} />
            </div>
        </div>
    )
}