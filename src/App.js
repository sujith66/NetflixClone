import React from "react";
import logo from "./logo.svg";
import axios from "axios";
import "./App.css";
import NavBar from "./Navbar/navbar.js";
import DogsList from "./DogsList/dogslist.js";
import Gallery from "./Gallery/gallery.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dogsRes: [],
      images: []
    };
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    axios
      .get("https://dog.ceo/api/breeds/list")
      .then(res => {
        const resposne = res.data.message;
        this.setState({ dogsRes: resposne, selectedDog: resposne[0] });
        console.log(this.state.dogsRes);
        return axios.get(`https://dog.ceo/api/breed/${resposne[0]}/images`);
      })
      .then(resImages => {
        console.log(resImages);
        this.setState({ images: resImages.data.message });
      });
  }
  handleClick(event) {
    let dogsClick;
    if (event.target) {
      dogsClick = event.target.id;
    } else {
      dogsClick = event;
    }

    console.log(dogsClick);
    this.setState({ image: [], selectedDog: dogsClick });
    axios.get(`https://dog.ceo/api/breed/${dogsClick}/images`).then(image => {
      this.setState({ images: image.data.message });
    });
  }
  render() {
    return (
      <div className="dogs-container">
        <NavBar click={this.handleClick} />
        <div className="row">
          <div className="col-3">
            <DogsList
              selectedDog={this.state.selectedDog}
              dogs={this.state.dogsRes}
              click={this.handleClick}
            />
          </div>
          <div className="col-9">
            <Gallery images={this.state.images} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
