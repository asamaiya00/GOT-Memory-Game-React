import React, { Component } from 'react'
import { withRouter, Redirect } from 'react-router-dom'
import Cookies from 'js-cookie'

function Guest(WrappedComponent) {
     class GuestHOC extends Component {

        render() {
           const token = Cookies.get('token')
           return token ? <Redirect to ='/' /> : <WrappedComponent />
        }
    }
    return withRouter(GuestHOC)
}

export default Guest
//This is keeping authenticated people away from Guest pages