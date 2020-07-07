import React, { useContext, useState } from 'react'
import AppContext from '../store'
import { REMOVE_IMAGE } from '../store/action'

export default function Images({ image, index, myRand }) {
    const [isHovering, setIsHovering] = useState(false)
    const [,dispatch] = useContext(AppContext)

    const removeImage = () => {
        dispatch({ type: REMOVE_IMAGE, payload: index });
    }

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

            className='w-1/2 sm:w-1/4 flex justify-center p-1'>
            <div className={`relative ${isHovering ? "" : "hidden"}`}>
                <i
                    className='fas fa-times absolute right-0 cursor-pointer'
                    onClick={() => removeImage()}>
                </i>
            </div>
            <img src={image} alt="Please enter Valid Url"
                width="200"
                // className='border hover:border-6 hover:border-yellow-300'  />

                className={`border ${myRand === index ? "opacity-100" : "opacity-50"}  hover:opacity-100 hover:border-yellow-300`} />
        </div>
    )
}
