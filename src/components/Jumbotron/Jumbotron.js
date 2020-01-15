import React from 'react';
import { Jumbotron, Col,  } from 'react-bootstrap';

class JumbotronHeader extends React.Component{
    constructor(props) {
        super(props);
        this.state = { pathname: this.props.pathname }
    };
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.pathname !== this.props.pathname) {
          this.setState({
              pathname:this.props.pathname
          })
        }
      }

    render() {
        return  <Jumbotron fluid={true} className={'mb-4'}>
                    <Col className={'pb-5 text-center justify-content-center align-items-center'}>
                        <h1 className={'jumbTitle'}>{this.state.pathname}</h1>        
                    </Col>
                </Jumbotron>

    }  
}


export default JumbotronHeader;