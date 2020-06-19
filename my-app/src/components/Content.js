// import React, { Component } from 'react'
import React, { useEffect, useState } from 'react'

export default function Content() {
    const [images, setImages] = useState([
        "https://images.unsplash.com/photo-1588615419966-0c0f3bb797b3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1592419044706-39796d40f98c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1311&q=80",
        "https://images.unsplash.com/photo-1592436259366-18ab6da5f195?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
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
    console.log(images);

    return (
        <div>
            <div className='flex justify-between'>
                {images.map((image, index) => {
                    if (image != "") return (
                        <div key={index}>
                            <img src={image} width="200" />
                        </div>
                    )
                })}
            </div>
            <div className="my-5">
                <input type="text"
                    className="p-2 m-2 rounded shadow border border-gray-800"
                    onChange={handleChange}
                    value={newImageUrl} />
                <button className='rounded bg-blue-700 p-2'
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
