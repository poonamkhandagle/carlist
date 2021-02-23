import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar.js";
class App extends React.Component{
  state = { images:[] };

    handleSearchSubmit = async(term) => {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: {query: term},
      headers: {
        Authorization: "Client-ID i3e2tK5ViUer-i4wJIepzGAFN2LiKSewkUgu0xGKBy0 "
      }
    })
    this.setState({images:response.data.results});
  }
  render(){
    return(
      <div className="ui container" style={{marginTop:"20px"}}>
      <SearchBar onSubmit={this.handleSearchSubmit} />
      Found: {this.state.images.length} images
      </div>
    )
  }
}
export default App;
