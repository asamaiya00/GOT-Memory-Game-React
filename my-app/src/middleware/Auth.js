import React, { Component } from 'react'
import { withRouter, Redirect } from 'react-router-dom'
import Cookies from 'js-cookie'

function Auth(WrappedComponent) {
     class AuthHOC extends Component {

        render() {
           const token = Cookies.get('token')
           return !token ? <Redirect to ='/login' /> : <WrappedComponent />
        }
    }
    return withRouter(AuthHOC)
}

export default Auth

// componentDidMount() {
        //     const token = Cookies
        // }
        
