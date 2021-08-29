import React from "react";


class SsgComponent extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
    
    }

    render(){
        return (
            <div>{this.props.name}</div>
        );
    }
}

export default SsgComponent