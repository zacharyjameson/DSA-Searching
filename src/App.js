import React from "react";

import { data } from "./data";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      value: "",
      found: false,
      count: 0,
    };
  }

  handleChange = (value) => {
    this.setState({
      value: value,
    });
    this.handleSeach(value);
  };

  handleSeach = (data, value) => {
    this.setState({
      found: false,
    });

    for (let i = 0; i < data.length; i++) {
      let numLoops = i;
      if (data[i] == value) {
        this.setState({
          found: true,
          count: numLoops,
        });
        return i;
      }
    }
    return -1;
  };

  handleClick = (e) => {
    e.preventDefault();

    const { value } = this.state;
    this.handleSeach(value);
  };

  render() {
    const { value, found, count } = this.state;

    return (
      <div>
        <div>
          <form>
            <label htmlFor="value">Value: </label>
            <input
              type="text"
              name="value"
              id="value"
              value={value}
              onChange={(e) => this.handleChange(e.target.value)}
            />
            <button onClick={(e) => this.handleClick}>Search</button>
          </form>
        </div>
        <div>
          {count === 0 ? (
            <p>Please enter a number value</p>
          ) : !found ? (
            <p>The value is not found</p>
          ) : (
            <p>{value} is in the array</p>
          )}
          <p>It took {count} times to find your number</p>
        </div>
      </div>
    );
  }
}

export default App;
