import React from 'react';
import {Alert,Button}from 'react-bootstrap';
import _default from 'react-bootstrap/esm/Accordion';

class AlertBox extends React.Component{
    constructor(props,context){
        super(props,context);
        this.state={
            show:true
        };
        this.handleDismiss = this.handleDismiss.bind(this);
        this.handleShow = this.handleShow.bind(this);
    }
    handleDismiss(){
        this.setState({show:false})
    }
    handleShow(){
        this.setState({show:true})
    }
    render(){
        if(this.state.show){
            return(
                <>
                <Alert bsStyle="danger"onDismiss={this.handleDismiss}>
                    <h4>Oops! you got an error</h4>
                    <p>
                        change this and that try again.
                        this is Alert Box example in react js.
                    </p>
                    <p>
                        <Button onclick={this.handleDismiss}>Hide Alert</Button>
                    </p>
                </Alert>
                </>
            )
        }
        return <Button onclick={this.handleShow}>ShoeAlert</Button>
    }
}
export default AlertBox;