import React from 'react'
import { Link, useNavigate } from 'react-router'

const Home = () => {
    const navigate = useNavigate();

    function handleBtnClick() {
        navigate("/dashboard", {
            replace: true
        })
    }

    return (
        <div>
            <nav>
                <Link to={"/login"} state={{name: "Priyank"}}>Login</Link>
                <Link to={"/about"}>About</Link>
            </nav>

            <button className='bg-black text-white hover:cursor-pointer' onClick={handleBtnClick}>Click to send somewhere</button>
        </div>
    )
}

export default Home