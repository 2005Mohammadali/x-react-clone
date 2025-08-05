export function Card({children, title}) {
    return(
        <div className="bg-green-300 rounded-2xl p-5 flex flex-col gap-2">
            <h1 className="font-bold text-xl">{title}</h1>
            {children}
        </div>
    )
}