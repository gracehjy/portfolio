export function TagContainer({ children }) {
    return (
        <div className="flex flex-nowrap gap-2.5 py-2.5 w-full box-border flex-wrap sm:flex-nowrap">
            {children}
        </div>
    )
}


export function Tag ({ value }) {
    return (
        <>
            <div className="text-white px-5 py-1 rounded-full bg-[#333] text-sm whitespace-nowrap opacity-90">
                {value}
            </div>
        </>
    )
}