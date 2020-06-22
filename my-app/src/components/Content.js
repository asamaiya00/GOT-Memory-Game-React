import React, { useContext } from 'react';
import Images from './Images';
import AppContext from '../store';

export default function Content() {

    const handleChange = (event) => {
        setNewImageUrl(event.target.value);
    }
    const [{ handleNewImage, setNewImageUrl, newImageUrl }] = useContext(AppContext)
    return (
        <div >
            <Images />
            <div className="my-10 flex justify-center">
                <input type="text"
                    className="p-2 m-2 rounded shadow border border-gray-800"
                    onChange={handleChange}
                    value={newImageUrl} />
                <button className='py-2 px-4 bg-yellow-600 text-white rounded mx-2'
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
