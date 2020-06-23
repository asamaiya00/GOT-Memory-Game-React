import React, { useContext,useState } from 'react';
import Images from './Images';
import AppContext from '../store';
import { ADD_IMAGE } from '../store/action';

export default function Content() {
    const [,dispatch] = useContext(AppContext)
    const handleChange = (event) => {
        setNewImageUrl(event.target.value);
    }

    const addNewImage = () => {
        dispatch({ type: ADD_IMAGE, payload: newImageUrl })
    }

    const [newImageUrl, setNewImageUrl] = useState("")

    return (
        <div >
            <Images />
            <div className="my-10 flex justify-center">
                <input type="text"
                    className="p-2 m-2 rounded shadow border border-gray-800"
                    onChange={handleChange}
                    value={newImageUrl} />
                <button className='py-2 px-4 bg-yellow-600 text-white rounded mx-2'
                    onClick={addNewImage}>Add Image</button>
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
