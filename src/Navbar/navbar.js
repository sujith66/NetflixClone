import React from "react";
import { statement } from "@babel/template";
class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
    this.searchDogs = this.searchDogs.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  searchDogs(event) {
    event.preventDefault();
    let value = this.state.value;
    this.props.click(value);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <div>
        <nav className="navbar  navbar-light bg-light ">
          <a className="navbar-brand" href="#">
            My dogs list
          </a>
          <div className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="text"
              onChange={this.handleChange}
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              onClick={this.searchDogs}
            >
              Search
            </button>
          </div>
        </nav>
      </div>
    );
  }
}
export default NavBar;
