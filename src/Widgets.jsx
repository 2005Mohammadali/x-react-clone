import { Card } from "./Card"
import { Button } from "./Button"
export function Widgets(){
    return(
        <div className="w-64 h-screen bg-blue-500 flex flex-col flex-2 p-4 gap-3 ml-20">
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