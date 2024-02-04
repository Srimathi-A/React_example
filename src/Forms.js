import React from "react";

class Forms extends React.Component{

    constructor(props){
        super(props);

        this.state ={};
        this.state.filterText = "";
        this.state.products = [
            {
                id:1,
                name: 'Ramesh',
                course: 'FSD',
                content: 'Java,DSA,ReactjJs,Mango DB',
                fees: '80000'
            },
            {
                id:2,
                name: 'Kavitha',
                course: 'PGA',
                content: 'Python,SQL,AI',
                fees: '150000' 
            },
            {
                id:3,
                name: 'Santhosh',
                course: 'Invesment Banking',
                content: 'Accounting,Finance Mangement',
                fees: '150000'  
            },
            {
                id:4,
                name: 'Jamuna',
                course: 'FSD',
                content: 'Java,DSA,React Js,Mango DB',
                fees: '150000'
            },
            {
                id:5,
                name: 'Chitra',
                course: 'PGA',
                content: 'Python,SQL,AI',
                fees: '150000'
            }
        ];
    }
    handleUserInput(filterText){
        this.setState({filterText: filterText});
    };
    handleRowDel(product){
        var index = this.state.products.indexOf(product);
        this.state.products.splice(index,1);
        this.setState(this.state.products);
    };
    handleAddEvent(evt){
        var id =(+ new Date() + Math.floor(Math.random() * 999999)).toString(36);
        var product ={
            id: id,
            name: "",
            course: "",
            content: "",
            fees: ""
        }
        
        this.state.products.push(product);
        this.setState(this.state.products);
    }

    handleProductTable(evt){
        var item ={
            id: evt.target.id,
            name: evt.target.name,
            value: evt.target.value
        };
        var products = this.state.products.slice();
        var newproduct = products.map(function(product){

             for(var key in product){
                if(key === item.name && product.id === item.id){
                    product[key] = item.value;
                }
            }
            return product;
        });
        this.setState({products:newproduct});

        };
        render(){

            return(
                <div>
                    <h1>Imarticus Learning</h1>
                    <SearchBar filterText={this.state.filterText}
                    onUserInput={this.handleUserInput.bind(this)}/>
                    <ProductTable OnProductTableUpdate={this.handleProductTable.bind(this)}
                    onRowAdd={this.handleAddEvent.bind(this)}
                    onRowDel={this.handleRowDel.bind(this)} products={this.state.products}
                    filterText={this.state.filterText}/>
                </div>
            )
        }
    }
    class SearchBar extends React.Component{
    handleChange(){
        this.props.onUserInput(this.refs.filterTextInput.value);
    }
    render(){
        return(
            <div>
                <input type="text" placeholder="Search..." value={this.props.filterText}
                ref="filterTextInput" onChange={this.handleChange.bind(this)}/>
            </div>
        );
    }
}
    class ProductTable extends React.Component{
        render(){
            var OnProductTableUpdate = this.props.OnProductTableUpdate;
            var rowDel = this.props.onRowDel;
            var filterText = this.props.filterText;
            var product = this.props.products.map(function(product){
                if(product.name.indexOf(filterText)=== -1){
                    return null;
                }
                return(<ProductRow OnProductTableUpdate = {OnProductTableUpdate}
                    product={product} onDelEvent={rowDel.bind(this)} key={product.id}/>)
            });
            return (
                <div>
                    <button type ="button" onClick={this.props.onRowAdd}
                    className="btn btn-success pull-right">Add</button>
                    <table  className="table table-bordered">
                        <thead>
                            <th>Name</th>
                            <th>Course</th>
                            <th>Content</th>
                            <th>Fees</th>
                        </thead>
                        <tbody>
                            {product}
                        </tbody>
                    </table>
                </div>
            );
        }
    }
    class ProductRow extends React.Component{
        onDelEvent(){
            this.props.onDelEvent(this.props.product);
        }
        render(){
            return(
                <tr className="eachRow">
                    <EditableCell OnProductTableUpdate={this.props.OnProductTableUpdate}
                    cellData={{
                        "type":"name",
                        value: this.props.product.name,
                        id: this.props.product.id
                    }}/>
                    <EditableCell OnProductTableUpdate={this.props.OnProductTableUpdate}
                    cellData={{
                        "type":"course",
                        value: this.props.product.course,
                        id: this.props.product.id
                    }}/>
                    <EditableCell OnProductTableUpdate={this.props.OnProductTableUpdate}
                    cellData={{
                        "type":"content",
                        value: this.props.product.content,
                        id: this.props.product.id
                    }}/>
                    <EditableCell OnProductTableUpdate={this.props.OnProductTableUpdate}
                    cellData={{
                        "type":"fees",
                        value: this.props.product.fees,
                        id: this.props.product.id
                    }}/>
                    <td className="del-cell">
                        <input type = "button" onClick={this.onDelEvent.bind(this)} value="X"
                        className="del-btn"/>
                    </td>
                </tr>
            );
        }
    }
class EditableCell extends React.Component{
    render(){
        return(
            <td>
                <input type="text" name={this.props.cellData.type}
                id={this.props.cellData.id}
                value={this.props.cellData.value}
                onChange={this.props.OnProductTableUpdate}/>
            </td>
        );
    }

}
export default Forms;