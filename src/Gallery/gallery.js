import React from "react";
import "./gallery.css";
class navbar extends React.Component {
  render() {
    const dogsImages = [];
    this.props.images.forEach((image, index) => {
      dogsImages.push(
        <div key={index} className="card">
          <img className="card-img-top" src={image} alt="Card image cap" />
        </div>
      );
    });
    return <div>{dogsImages}</div>;
  }
}
export default navbar;
