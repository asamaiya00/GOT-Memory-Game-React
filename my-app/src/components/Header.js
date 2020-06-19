import React from 'react'

export default function Header({title, home}) {
    return (
        <header className='bg-orange-500 text-white p-4 flex'>
            <p className='mx-2'>{title}</p>
            <p className='mx-2'>{home}</p>
            <p className='mx-2'>About</p>
        </header>

    )
}
