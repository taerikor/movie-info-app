import React from 'react'

class Detail extends React.Component{
    componentDidMount(){
        const { location, history}:any = this.props;
        if(location.state === undefined){
            history.push('/');
        }
    }
    render(){
        const { location }:any = this.props;
        if (location.state) {
          return <span>{location.state.title}</span>;
        } else {
          return null;
        }
    }
}

export default Detail;