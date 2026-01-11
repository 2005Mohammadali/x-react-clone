export function Icons({children, iconStyle, value, valueStyle}) {
    return(
        <div className={`flex items-center text-gray-500`}>
            <span className={`rounded-full p-2 ${iconStyle}`}>
                {children}
            </span>
            {value && <span className={`text-sm text-gray-500 ${valueStyle}`}>{value}</span>}
        </div>
    )
}