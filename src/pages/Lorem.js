import React from "react";
import Loaders from "../components/Loaders";

class Lorem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoading: false,
      error: null
    };
  }
  async componentDidMount() {
    this.setState({
      isLoading: true
    });

    try {
      const rest = await fetch(
        "https://baconipsum.com/api/?type=meat-and-filler"
      );
      const data = await rest.json();
      console.log(data);
      this.setState({
        data,
        isLoading: false
      });
    } catch (err) {
      this.setState({
        isLoading: false,
        error: err.message
      });
      throw err;
    }
  }

  render() {
    return (
      <div>
        <h1>Lorem</h1>
        <br />
        {this.state.error ? (
          this.state.error
        ) : !this.state.isLoading ? (
          <p>{this.state.data}</p>
        ) : (
          <Loaders />
        )}
      </div>
    );
  }
}

export default Lorem;
