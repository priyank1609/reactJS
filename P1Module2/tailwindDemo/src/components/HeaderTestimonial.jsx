import starIcon from '../assets/star.png'

const HeaderTestimonial = ({text, starCount}) => {
    return (
        <div className='flex flex-col gap-2 justify-center items-center w-fit group'>
            <div id="stars" className='flex gap-2'>
                {Array.from({ length: starCount }).map((_, index) => (
                    <img src={starIcon} alt="star icon" key={index} className='w-5 h-5 lg:w-7 lg:h-7 group-hover:animate-spin'/>
                ))}
            </div>
            <p className='font-fancy text-gray-400 text-lg lg:text-xl lg:font-semibold'>"{text}"</p>
        </div>
    )
}

export default HeaderTestimonial
