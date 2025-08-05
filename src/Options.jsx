import { Link } from "react-router-dom"

export function Options({children, title}) {
    return(
        <div className="flex items-center gap-2 px-3 py-3 cursor-pointer hover:bg-green-200 rounded-4xl">
            {children}
            <Link>{title}</Link>   
        </div>
    )
}