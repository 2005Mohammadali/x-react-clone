export function Card({children, title, styles}) {
    return(
        <div className={`bg-transparent border border-gray-700 rounded-2xl flex flex-col overflow-hidden ${styles}`}>
            <h1 className="font-bold text-xl pl-5 pt-5 pb-2">{title}</h1>
            {children}
        </div>
    )
}