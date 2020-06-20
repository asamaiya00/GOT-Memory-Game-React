import React, { useEffect, useState } from 'react'
import Images from './Images';

export default function Content() {
    const [images, setImages] = useState([
        "https://images.unsplash.com/photo-1588615419966-0c0f3bb797b3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1592419044706-39796d40f98c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1311&q=80",
        "https://images.unsplash.com/photo-1592436259366-18ab6da5f195?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        "https://images.unsplash.com/photo-1592565277104-7b50f3396105?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        "https://images.unsplash.com/photo-1592509280917-c8e554d3c711?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1480&q=80",
        "https://images.unsplash.com/photo-1592496753124-b3b0a3903254?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        "https://images.unsplash.com/photo-1592376995682-0cb77747c619?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80",
        "https://images.unsplash.com/photo-1592510036678-04750c7ab958?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80",
        "https://images.unsplash.com/photo-1592508908964-c9a7200b9115?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1322&q=80",
    ])

    const [newImageUrl, setNewImageUrl] = useState("")
    function handleNewImage() {

        setImages([...images, newImageUrl]);
        setNewImageUrl("");
    }
    const handleChange = (event) => {
        console.log(event.target.value);
        setNewImageUrl(event.target.value);
    }
    const handleRemove = (removeIndex) => {
        setImages(images.filter((image, index) => index !== removeIndex));
    }

    const [myRand, setMyRand] = useState(-1)
    useEffect(() => {
        const interval = setInterval(() => {
            const rand = Math.floor(Math.random() * images.length);
            console.log(rand);
            setMyRand(rand)
        }, 1000)
        return () => {
            clearInterval(interval)
        }
    })
    return (
        <div >
            <div className='flex flex-wrap justify-between'>
                {images.map((image, index) => {
                    return (
                        <Images
                            image={image}
                            index={index}
                            key={index}
                            myRand={myRand}
                            handleRemove={handleRemove}
                        />
                    )
                })}
            </div>
            <div className="my-5">
                <input type="text"
                    className="p-2 m-2 rounded shadow border border-gray-800"
                    onChange={handleChange}
                    value={newImageUrl} />
                <button className='p-2 bg-yellow-600 text-white rounded mx-2'
                    onClick={handleNewImage}>Add Image</button>
            </div>
        </div>
    )
}





// useEffect(() => {
    //     console.log("I am content");
    //     return () => {
    //         console.log("byeeee");

    //     }
    // })

// export default class Content extends Component {
//     componentDidMount() {
//         console.log("I am mounted");
//     }
//     componentWillUnmount(){
//         console.log("bye");
//     }
//     render() {
//         return (
//             <div>I am div</div>
//         )
//     }
// }
