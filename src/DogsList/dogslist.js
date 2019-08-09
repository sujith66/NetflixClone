import React from "react";
import "./dogslist.css";
class dogsList extends React.Component {
  render() {
    let dogsListContent = [];
    this.props.dogs.forEach(element => {
      let className = "list-group-item ";
      if (this.props.selectedDog === element) {
        className += "active";
      }
      dogsListContent.push(
        <li
          key={element}
          id={element}
          className={className}
          onClick={this.props.click}
        >
          {element}
        </li>
      );
    });

    return <ul className="list-group">{dogsListContent}</ul>;
  }
}
export default dogsList;
