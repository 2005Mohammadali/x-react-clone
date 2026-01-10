export function Button({title, styles}) {
    return(
        <div className={`bg-sky-500 rounded-4xl text-center font-bold cursor-pointer hover:bg-sky-600 ${styles}`}>
            {title}
        </div>
    )
}