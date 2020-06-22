import React, { useContext, useState } from 'react'
import AppContext from '../store'

export default function Images({ image, index, myRand }) {
    const [isHovering, setIsHovering] = useState(false)
    const [{ handleRemove }] = useContext(AppContext)

    const handleMouseOver = () => {
        setIsHovering(true)
    }

    const handleMouseLeave = () => {
        setIsHovering(false)
    }
    return (
        <div key={index}
            onMouseOver={handleMouseOver}
            onMouseLeave={handleMouseLeave}

            className='w-1/4 flex justify-center my-2'>
            <div className={`relative ${isHovering ? "" : "hidden"}`}>
                <i
                    className='fas fa-times absolute right-0 cursor-pointer'
                    onClick={() => handleRemove(index)}>
                </i>
            </div>
            <img src={image} alt="Please enter Valid Url"
                width="200"
                // className='border hover:border-6 hover:border-yellow-300'  />

                className={`border ${myRand === index ? "opacity-100" : "opacity-50"}  hover:opacity-100 hover:border-yellow-300`} />
        </div>
    )
}
