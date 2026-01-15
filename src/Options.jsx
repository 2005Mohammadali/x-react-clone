import { Link } from "react-router-dom"

export function Options({children, title}) {
    return(
        <div className="flex items-center text-xl font-normal cursor-pointer">
            <div className="flex items-center gap-4 px-4 py-3 hover:bg-[#40444d50] rounded-4xl">
                {children}
                <Link>{title}</Link>   
            </div>
        </div>
    )
}