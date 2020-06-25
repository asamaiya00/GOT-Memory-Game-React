import React, { useState, } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

import { BrowserRouter, } from "react-router-dom";

import AppRouter from './AppRouter';
const App = () => {
    const [title] = useState("My React App")
   
    // const state = {
    //     images,
    //     setImages,
    //     handleNewImage,
    //     handleRemove,
    //     newImageUrl,
    //     setNewImageUrl,
    // }


    return (
        <BrowserRouter>
            <Header title={title} home='Home'></Header>
            <div className="h-screen">
                <div className='flex justify-center'>
                    <div className="w-10/12">
                        <AppRouter/>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </BrowserRouter>
    )
}

export default App;







// CLASS BASED COMPONENT

    // class App extends React.Component {
    //     constructor(props) {
    //         super(props)
    //         this.state = { title: 'My react App', isOpen: false }
    //     }
    //     componentDidMount() {
    //         console.log("fir component did mount");
    //     }
    //     componentDidUpdate() {
    //         console.log("i am app updated");

    //     }
    //     handleClick = () => {
    //         this.setState({ isOpen: !this.state.isOpen })
    //     }
    //     render() {
    //         console.log('pehle render hota hai');

    //         return (
    //             <React.Fragment >
    //                 <Header title={this.state.title} home='Home'></Header>
    //                 <div className="h-screen">
    //                     <div className='flex justify-center'>
    //                         <div className="w-1/2">
    //                             <button className='bg-green-600 text-white p-2 rounded shadow'
    //                                 onClick={() => this.handleClick()}>Toggle me</button>
    //                             {this.state.isOpen ? <Content/> : null}
    //                         </div>
    //                     </div>
    //                 </div>
    //                 <Footer></Footer>
    //             </React.Fragment >
    //         )
    //     }
    // }

    // console.log(<App />);

// useEffect HOOK

    // useEffect(() => {
    // component did mount and will update 
    //     return () => {
    //         component will unmount
    //     }
    // }, [input])

    // useEffect(() => {
    //     console.log("I am app");
    // })

    // useEffect(() => {
    //     console.log("I am App");
    // }, [])// component did mount

    // useEffect(() => {
    //     if (isOpen) console.log("Div is showing");
    // }, [isOpen])//componentWillUpdate 

    // useEffect(() => {
    //     console.log("Title is changed");
    // }, [title])//componentWillUpdate 

// Conditional rendering
    // <button className='bg-green-600 text-white p-2 rounded shadow'
    //                         onClick={() => {
    //                             setIsOpen(!isOpen)
    //                             setTitle(!isOpen)
    //                         }
    //                         }>Toggle me</button>
    //                     {isOpen ? <Content /> : null}


// Context HOOK
    // const AppContext = React.createContext()
    // const context = React.useContext(AppContext)

// reducer HOOk
    // const [state, dispatch] = React.useReducer(reducer, {
    //     name: "Animesh",
    //     email: "asamaiya00@gmail.com"
    // })
    // const UPDATE_EMAIL = {type:,payload:}
    // console.log(dispatch);

    // <button onClick={test} > helooo</button>
// 