import * as React from "react";
import * as ReactDOM from "react-dom";
import { Hello } from './components/Hello';

class App extends React.Component<{}, {}> {
  render() {
    return <Hello name="ilian"></Hello>;
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);