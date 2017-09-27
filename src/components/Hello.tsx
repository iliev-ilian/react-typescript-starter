import * as React from "react";
import * as ReactDOM from "react-dom";

interface HelloProps {
  name: string;
}

export class Hello extends React.Component<HelloProps, {}> {
  render() {
    return <div>Hello, {this.props.name}</div>;
  }
}

//export default Hello;