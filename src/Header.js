import React, { Component } from 'react';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state={favoritecolor:"green"};
    }
    shouldComponentUpdate(){
        return true;
    }
    getSnapshortBeforeUpdate(prevProps,prevState){
        document.getElementById("div1").innerHTML=
        "Before the update , the favorite was"+prevState.favoritecolor;
    }
    componentDidUpdate(){
        document.getElementById("div2").innerHTML="the updated favorite is"+ this.state.favoritecolor;
    }
    changeColor = ()=>{
        this.setState({favoritecolor:"red"});
    }
   /* static getDerivedStateFormProps(props,state){
        return {favoritecolor: props.favcol};
    }
    componentDidMount(){
        setTimeout( ()=>{
            this.setState({favoritecolor:"yellow"})
        },5000)
    }*/
    render(){
        return (
            <div>
            <h1>My Favorite Color is {this.state.favoritecolor}</h1>
            <button type="button" onClick={this.changeColor}>Change color</button>
            <div id="div1"></div>
            <div id="div2"></div>
            </div>
        );
    }
}
export default Header;