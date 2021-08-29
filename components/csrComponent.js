import React from "react";


class CsrComponent extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            "name":''
        }
    }

    componentDidMount(){
        this.setState({
            name : 'csr4443'
        })
    }

    render(){
        return (
            <div>{this.state.name}</div>
        );
    }
}

export default CsrComponent