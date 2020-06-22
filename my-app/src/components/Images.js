import React, { useState, useEffect, useContext } from 'react';
import Image from './Image';
import AppContext from "../store";

export default function Images() {
    //  ask {} []
    const [{ images }] = useContext(AppContext);

    useEffect(() => {
        console.log("APP CONTEXT:", AppContext);
    }, []);

    const [myRand, setMyRand] = useState(-1)

    useEffect(() => {
        const interval = setInterval(() => {
            setMyRand(Math.floor(Math.random() * images.length))
        }, 1000)
        return () => {
            clearInterval(interval)
        }
    })
    return (
        <div className='flex flex-wrap justify-between'>
            {images.map((image, index) => {
                return (
                    <Image
                        image={image}
                        index={index}
                        key={index}
                        myRand={myRand}
                    />
                )
            })}
        </div>
    )
}
