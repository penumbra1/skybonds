import React, { Component } from "react";
import Chart from "./components/Chart";
import Layout from "./components/Layout";
import IndicatorSelect from "./components/IndicatorSelect";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Layout>
        <Chart />
        <IndicatorSelect />
      </Layout>
    );
  }
}

export default App;
