import * as React from "react";
import * as ReactDOM from "react-dom";

interface HelloProps {
    name: string;
  }
  
  class Hello extends React.Component<HelloProps, {}> {
    render() {
      return <div>Hello, {this.props.name}</div>;
    }
  }
  
  export default Hello;

  ReactDOM.render(
    <Hello name="ilian"></Hello>,
    document.getElementById('app')
);