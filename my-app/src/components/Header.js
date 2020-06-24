import React from 'react'
import { Link } from 'react-router-dom'

export default function Header({ title, home }) {
    return (
        <header className='bg-orange-500 text-white p-4 flex'>
            <p className='mx-2'><Link to='/'>{title}</Link></p>
            <p className='mx-2'><Link to='/login'>Login</Link></p>
            <p className='mx-2'>About</p>
        </header>

    )
}
