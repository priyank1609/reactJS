import logo from "../assets/logo.png"
import LinkButton from "./LinkButton"

const Navbar = () => {
    return (
        <nav className="flex p-6 items-center justify-between lg:p-8">
            <a href="#" className="w-42 lg:w-52">
                <img src={logo} alt="logo" />
            </a>
            <ul id="menu-bar" className="hidden lg:flex flex-1 mx-12 gap-8 text-lg">
                <li id="menu-item"><LinkButton text="Features"/></li>
                <li id="menu-item"><LinkButton text="Pricing"/></li>
                <li id="menu-item"><LinkButton text="Whats's New"/></li>
            </ul>
            <div id="auth-container" className="flex gap-8 items-center">
                <LinkButton text="Login" className="hidden lg:block"/>
                <button className="cursor-pointer font-bold text-xl text-black bg-yellow-400 px-6 py-3 rounded-xl hover:bg-yellow-300 hover:-translate-y-1 transition-all">Sign up</button>
            </div>
        </nav>
    )
}

export default Navbar
