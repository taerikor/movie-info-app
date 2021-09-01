import React from 'react'
import { HomeProps } from './Home'

interface DetailProps {
  location: {
    state: HomeProps
  };
  history: {
    push: any
  }
}

class Detail extends React.Component<DetailProps>{
    componentDidMount(){
        const { location, history} = this.props;
        if(location.state === undefined){
            history.push('/');
        }
    }
    render():JSX.Element | null {
        const { location } = this.props;
        if (location.state) {
          return <span>{location.state.title}</span>;
        } else {
          return null;
        }
    }
}

export default Detail;