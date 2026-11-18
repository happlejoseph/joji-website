

import { Link } from "react-router-dom"


const Navbar = ()=> {

    return (
        <nav className="flex items-center justify-between px-8 py-5">

            <Link to='/' classname='text-2xl font-bold tracking-wider'>
                JOJI FITNESS
            </Link>

            <div className="flex items-center gap-6">

                <Link to='/'>Home</Link>
                <a href="/#service">Services</a>
                <Link to='/about'>About</Link>
                <a href="/#pricing">Pricing</a>
                <a href="/#contact">Contact</a>

            </div>

            <a href="/#contact" className="bg-white px-5 py-3 font-semibold text-black">
                Get Started
            </a>

        </nav>
    )
}


export default Navbar