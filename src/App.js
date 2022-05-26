import React from "react";
import './App.css';

/* conenctando com a API de teste */
class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }
  callAPI() {
    fetch("http://localhost:9000/testAPI")
      .then(res => res.text())
      .then(res => this.setState({ apiResponse: res }));
  }
  componentWillUnmount() {
    this.callAPI();
  }

render() {
  return (
    <div>
      <h1>hello world</h1>
      <h2>my name is maradona</h2>
      <p style={{color:'red'}}>{this.state.apiResponse}</p>
    </div>
  );
  }
}

export default App;
