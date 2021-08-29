import React from "react";
import SsgComponent from '../components/ssgConponent'
import CsrComponent from "../components/csrComponent";
export async function getStaticProps() {
    const data ={
        name :'SsgComponent6'
    }

    return {
        props: {
            data,
        }, // will be passed to the page component as props
        revalidate: 10
    }
}
class About extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        
    }

    render(){
        return (
            <div>
                <SsgComponent name={this.props.data.name}/>
                <CsrComponent />
            </div>
        );
    }
}

export default About