import { Card } from "./Card"
import { Button } from "./Button"
export function Widgets(){
    return(
        <div className="w-64 h-screen bg-black flex flex-col flex-2 p-4 gap-3 ml-20">
            <Card>
                <div className="flex items-center justify-between">
                    <p>Search</p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                </div>
            </Card>
            <Card title = {"Subscribe to Premium"}>
                <p>Subscribe to unlock new features and if eligible, receive a share of revenue.</p>
                <Button title={"Subscribe"}/>
            </Card>
            <Card title = {"What\'s happening"}>
                <p>Subscribe to unlock new features and if eligible, receive a share of revenue.</p>
                <Button title={"Show More"}/>
            </Card>
            <Card title = {"Who to follow"}>
                <p>Subscribe to unlock new features and if eligible, receive a share of revenue.</p>
                <Button title={"Show More"}/>
            </Card>
        </div>
    )
}