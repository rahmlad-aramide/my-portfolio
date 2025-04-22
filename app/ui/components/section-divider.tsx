export const SectionDivider:React.FC<{heading: string}> = ({heading}) => {
    return (
        <div className="flex flex-col mb-4">
            <h2 className="mb-2.5 text-lg md:text-xl font-semibold uppercase">{heading}</h2>
            <div className="w-full h-px bg-white">
                <div className="w-[44.5%] max-w-[150px] md:max-w-[497px] h-px bg-[#F6D021]"></div>
            </div>
        </div>
    )
}