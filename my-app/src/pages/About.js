import React, { Component } from 'react';

function About() {
  return <div>
  <h1>Use email : password<br/>
  eve.holt@reqres.in : cityslicka </h1>
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
