import React from 'react';

class DemoForm extends React.Component{
    constructor(){
        super();
        this.state={
            input:{},
            errors:{}
        };
        this.handleChange=this.handleChange.bind(this);
        this.handleChange=this.handleChange.bind(this);
    }
    handleChange(event){
        let input=this.state.input;
        input[event.target.name]=event.target.value;
        this.setState({
            input
        });
    }
    handleSubmit(event){
        event.preventDefault();

        if(this.validation()){
            console.log(this.state);
            let input={};
            input ["username"]="";
            input["email"]="";
            input["password"]="";
            input["confirm_password"]="";
            this.setState({input:input});
            alert('Demo Form is submitted');
        }
    }
    validate(){
        let input=this.state.input;
        let errors={};
        let isValid=true;

        if(!input["username"]){
            isValid=false;
            errors["username"]="please enter your username.";
        }
        if(typeof input["username"]!=="undefined"){
            const re=/^\S*$/;
            if(input["username"].length<6||!re.test(input["username"])){
                isValid=false;
                errors["username"]="please enter valid username.";
            }
        }
        if(!input["email"]){
            isValid=false;
            errors["email"]="pleasew enter your email Address.";
        }
        if(typeof input["email"]!=="undefined"){
            let patten=/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
            if(!patten.test(input["email"])){
                isValid=false;
                errors["email"]="pleaase enter valid emal address.";
            }
        }
        if(!input["password"]){
            isValid=false;
            errors["password"]="please enter your password.";
        }
        if(!input ["confirm_password"]){
            isValid=false;
            errors["confirm_password"]="please enter your confirm password.";
        }
        if(typeof input ["password"]!=="undefined"){
            if(input ["password"].length<6){
                isValid=false;
                errors["password"]="please add at least 6 characters.";
            }
        }
        if(typeof input ["password"]!=="undefined"&&typeof input["confirm_password"]
        !=="undefined"){
            if(input["password"]!==input["confirm_password"]){
                isValid=false;
                errors["password"]="passwords don't match.";
            }
        }
        this.setState({
            errors:errors
        });
        return isValid;
    }
    render() {
        return(
            <div>
                <h1>React Username and Password Validation Example</h1>
                <form onSubmit={this.handleSubmit}>
                    <div class="form-group">
                        <label for="username">Username:</label>
                        <input
                        type="text"
                        name="username"
                        value={this.state.input.username}
                        onChange={this.handleChange}
                        class="form-control"
                        placeholder="enter username"
                        id="username"/>

                        <div classname="text-danger">{this.state.errors.username}</div>
                    </div>
                    <div class="form-group">
                        <label for="email">Email Address:</label>
                        <input
                        type="text"
                        name="email"
                        value={this.state.input.email}
                        onChange={this.handleChange}
                        class="form-control"
                        placeholder="enter email"
                        id="email"/>

                        <div classname="text-danger">{this.state.errors.email}</div>
                    </div>
                    <div class="form-group">
                        <label for="password">Password:</label>
                        <input
                        type="password"
                        name="password"
                        value={this.state.input.password}
                        onChange={this.handleChange}
                        class="form-control"
                        placeholder="enter password"
                        id="password"/>

                        <div classname="text-danger">{this.state.errors.password}</div>
                    </div>
                    <div class="form-group">
                        <label for="confirm_password">confirm_password:</label>
                        <input
                        type="password"
                        name="confirm_password"
                        value={this.state.input.confirm_password}
                        onChange={this.handleChange}
                        class="form-control"
                        placeholder="enter confirm_password"
                        id="confirm_password"/>

                        <div classname="text-danger">{this.state.errors.confirm_password}</div>
                    </div>
                    <input type="submit"value="submit" class="btn btn-success"/>
                </form>
            </div>
        );
    }
}
export default DemoForm;