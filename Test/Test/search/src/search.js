import React from "react";
import DisplayResult from "./searchResult";


export default class SearchResult extends React.Component {

    constructor() {
        super();
        this.state = { keyword: "", results: [] }
        this.searchImage = this.searchImage.bind( this );
    }

    searchImage() {

        let queryURL = `https://api.unsplash.com/search/photos/?query=${this.state.keyword}&client_id=df28ff85ddfd5c66e129d901cd2f025463d4911ed156aff171d16e2cf588c07d`
        let resultImages = [];
        fetch( queryURL ).then( results => 
            results.json() 
     ). then( results => {
            results.results.forEach( result =>
                resultImages.push( result.urls.small )
            )
            this.setState( {results: resultImages } )
         } )
    }

    render( ) {
        return (
            <div>
                <input type="text" onChange={ (event)  =>  this.setState( { keyword: event.target.value } )} ></input>
                <button style={{ height:"20px"}} onClick={this.searchImage}></button>
                { this.state.results && this.state.results.length > 0  &&
                <DisplayResult imageURLs ={ this.state.results } ></DisplayResult>
                }
            </div>
        )

    }
}