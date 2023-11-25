import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <nav className='flex flex-row justify-around p-4 mt-11 w-[1980px]'>
            <div className='md:text-green-500'>
                LOGO
            </div>

            <div className='flex gap-11'>
                <div>Home</div>
                <Link href="/Trade"><div>Trade</div></Link>
                <Link href="/donations"><div>Donations</div></Link>
                <Link href="/points"><div>Points</div></Link>
                <Link href="/about"><div>About</div></Link>
                <Link href="/contact"><div>Contact Us</div></Link>
            </div>

            <div className='flex gap-7'>
                <button>Sign In</button>
                <button>Sign Out</button>
            </div>
        </nav>
    )
}

export default Navbar