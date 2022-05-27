import React from "react";
import "./App.css";
import AddProduto from "./Telas/Produto/addProduto";

/* conenctando com a API de teste */
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }
  callAPI() {
    fetch("http://localhost:9000/testAPI")
      .then((res) => res.text())
      .then((res) => this.setState({ apiResponse: res }));
  }
  componentWillUnmount() {
    this.callAPI();
  }

  render() {
    return (
    <AddProduto/>
    )
  }
}

export default App;
