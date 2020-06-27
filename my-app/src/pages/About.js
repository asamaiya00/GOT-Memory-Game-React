import React, { Component } from 'react';

function About() {
  return <div>About</div>;
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
