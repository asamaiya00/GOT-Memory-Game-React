import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';

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

const App = () => {
    const [title, setTitle] = useState("My React App")
    const [isOpen, setIsOpen] = useState(null)

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

    // }, [title])

    return (
        <React.Fragment >
            <Header title={title} home='Home'></Header>
            <div className="h-screen">
                <div className='flex justify-center'>
                    <div className="w-1/2">
                        <button className='bg-green-600 text-white p-2 rounded shadow'
                            onClick={() => {
                                setIsOpen(!isOpen)
                                setTitle(!isOpen)
                            }
                            }>Toggle me</button>
                    {isOpen ? <Content /> : null}
                </div>
            </div>
            </div>
        <Footer></Footer>
        </React.Fragment >
    )
}

export default App;