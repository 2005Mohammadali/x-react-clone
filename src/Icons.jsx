export function Icons({children, iconStyle, value, valueStyle}) {
    return(
        <div className={`flex items-center text-gray-500 ${valueStyle} gap-1 cursor-pointer`}>
            <span className={`rounded-full p-2 ${iconStyle}`}>
                {children}
            </span>
            {value && <span className={`text-sm`}>{value}</span>}
        </div>
    )
}