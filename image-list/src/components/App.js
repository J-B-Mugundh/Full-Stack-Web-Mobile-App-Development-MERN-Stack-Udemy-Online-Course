import React from "react";
import SearchInput from './Searchinput';
import axios from 'axios';
import ImageList from "./imageList";

class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {images: []}
        this.onSearchSubmit = this.onSearchSubmit.bind(this)
    }

    async onSearchSubmit(entry){
        const response = await axios.get(`https://pixabay.com/api/?key=30382466-19e82c3dc7dcca725d9080e22&q=${entry}&image_type=photo&pretty=true`)
        this.setState({images: response.data.hits})
    }

    render(){
        return(
            <div className = 'ui container' style={{marginTop: '30px'}}>
                <SearchInput onSearchSubmit={this.onSearchSubmit}/>
                <ImageList images = {this.state.images} />
             </div>
        )
    }    
}

export default App;