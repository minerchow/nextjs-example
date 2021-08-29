
import { withRouter } from 'next/router'
import React from "react";
import axios from 'axios'



export const getStaticProps = async (context) => {
  
    console.log("333",context);
  
    const res = await axios.get('https://cnodejs.org/api/v1/topics?limit=3&tab=dev&page1')
    let aData
    if(res.data.success){
        aData = res.data.data
    }
    return {
        props: {
            id: context.params.id,
            date: Math.random(),
            v : JSON.stringify(aData)
        }, // will be passed to the page component as props
        revalidate: 10
    }
}

export const getStaticPaths = async () => {
  
   
    

    return {
        paths : [{
            params: { id: '1' }
          }],
        // Enable statically generating additional pages
        // For example: `/posts/3`
        fallback: 'blocking',
    }
}

const getParameterByName = (name, queryString) => {
    name = name.replace(/[\\[]/, '\\[').replace(/[\]]/, '\\]');
    if (!queryString) {
        queryString = location.search;
    }
    let regex = new RegExp('[\\?&]' + name + '=([^&#]*)'),
        results = regex.exec(queryString);
    return results == null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

class Detail extends React.Component{
    constructor(props){
        super(props)
       
    }

    componentDidMount(){
        console.log("ff",this.props)
        console.log("222",getParameterByName('v',this.props.router.asPath))
   
    }

    

    render(){
        const {id,date , v } = this.props
       
        return(
            <div>
                {
                    this.props.router.isFallback ? 
                        <div>loading...</div> : 
                            <div>
                                <p>{id}</p>
                                <p>{date}</p>
                                <p>{v}</p>
                            </div>
                        
                    
                }
            </div>
        )
        
    }
}
// const Detail = ({id,date}) => {
//     const router = useRouter()
//     console.log(router.query);

//     if (router.isFallback) {
//         return <div>Loading...</div>
//     }
//     return <div>
//         <p>id:{id}</p>
//         <p>{date}</p>
//     </div>

// }

export default withRouter(Detail)