import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='h-14 bg-indigo-200 rounded-full m-2 max-w-7xl mx-auto px-5'>
            <div className='px-6 font-semibold flex items-center w-full h-full text-indigo-900'>
                <div className='flex-1'>
                    <h2 className='text-2xl'>Moon Tech</h2>
                </div>
                <ul className='flex items-center gap-x-4'>
                    <li className='hover:text-indigo-950'>
                        <Link to='/'>Home</Link>
                    </li>
                    <li className='hover:text-indigo-950'>
                        <Link to='/shop'>Shop</Link>
                    </li>
                    <li className='hover:text-indigo-950'>
                        <Link to='/top-rated'>Top Rated</Link>
                    </li>
                    <li className='hover:text-indigo-950'>
                        <Link to='/cart'>Cart</Link>
                    </li>
                    <li className='hover:text-indigo-950'>
                        <Link to='/whitelist'>Whitelist</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;