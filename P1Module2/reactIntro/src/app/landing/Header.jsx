import viteImg from '/vite.svg'

export default function Header() {
    return (
        <header>
            <img src={viteImg} alt="Vite Image" style={{width: '4rem', height: '4rem'}}/>
            <h1 className='heading'>Hi, I am a React <span>Developer</span></h1>
        </header>
    )
}