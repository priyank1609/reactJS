const LinkButton = ({text, className=""}) => {
    return (
        <button className={`block relative group cursor-pointer ${className}`}>
            <span className="text-lg">{text}</span>
            <span className="absolute h-1 bg-red-500 -bottom-2 left-0 right-0 scale-x-0 group-hover:scale-x-100 transition duration-150"></span>
        </button>
    )
}

export default LinkButton
