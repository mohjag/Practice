import React from "react";

export default class DisplayResult extends React.Component {

    render() {
        return(
            this.props.imageURLs &&  this.props.imageURLs.map( element => 
                <img style={ { display:"block", width:"150px", height:"150px" } } src={ element } ></img>
            )           
        )
    }
}