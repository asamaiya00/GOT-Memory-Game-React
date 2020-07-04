import React, { Component } from 'react';

function About() {
  return <div>
  About <br/>
  <h1>Use "email": "eve.holt@reqres.in" and "password": "cityslicka"</h1>
  </div>;
}

function UpperCase(WrappedComponent) {
  return class About extends Component {
    componentDidMount() {
        console.log(this.props);
        
    }

    render() {
      return <WrappedComponent />;
    }
  };
}

export default UpperCase(About);
