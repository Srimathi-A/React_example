import React  from 'react';

class Counter extends React.Component{
    constructor(props){
        super(props);
        this.state={
            count:0
        }
    }
    handleclick = () =>{
        this.setState({count:this.state.count+1})
    }
    render(){
        return(
            <div>
                Counter Incrementation using class Component
                <br/><br/>
                Count value:{this.state.count}<br/>
                <button onClick={this.handleClick}>Increment</button>
            </div>
        )
    }
}
export default Counter;