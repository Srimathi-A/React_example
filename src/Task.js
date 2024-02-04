import React from 'react';

class Task extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            message:"MouseEvent"
        }
    }
    handleEvent =(event)=>{
        if(event.type === "mousedown") {
            this.setState({message: "Thank you for Subscribe"});
        } 
        
    }
    render () {
        return (
            <div>
                <div className="h4 bg-secondary text-white text-center p-2">
                    {this.state.message}
                </div>
                <div className="text-center">
                    <button className="btn btn-secondary"
                    onMouseDown ={this.handleEvent}
                    onMouseUp={this.handleEvent}
                    onMouseMove={this.handleEvent}>
                        Subscribe
                    </button>
                </div>
            </div>
        );
    }

    
}
export default Task;