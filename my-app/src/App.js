import React, { useState, } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';
import AppContext, { reducer } from './store';

const App = () => {
    const [title] = useState("My React App")

    const images = [
        "https://images.unsplash.com/photo-1592421817004-876c579a18e2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80",
        "https://images.unsplash.com/photo-1592436259366-18ab6da5f195?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
        "https://images.unsplash.com/photo-1592407928465-e557fbbf4ff9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
        "https://images.unsplash.com/photo-1592565277104-7b50f3396105?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        "https://images.unsplash.com/photo-1592509280917-c8e554d3c711?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1480&q=80",
        "https://images.unsplash.com/photo-1592496753124-b3b0a3903254?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        "https://images.unsplash.com/photo-1592376995682-0cb77747c619?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80",
        "https://images.unsplash.com/photo-1592510036678-04750c7ab958?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80",
        "https://images.unsplash.com/photo-1592508908964-c9a7200b9115?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1322&q=80",
    ]



    const [state, dispatch] = React.useReducer(reducer, { images });

    // const state = {
    //     images,
    //     setImages,
    //     handleNewImage,
    //     handleRemove,
    //     newImageUrl,
    //     setNewImageUrl,
    // }


    return (
        <React.Fragment >
            <Header title={title} home='Home'></Header>
            <div className="h-screen">
                <div className='flex justify-center'>
                    <div className="w-10/12">
                        <AppContext.Provider value={[state, dispatch]}>
                            <Content />
                        </AppContext.Provider>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </React.Fragment>
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