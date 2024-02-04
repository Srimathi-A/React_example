import React from "react";

class Products extends React.Component{

    constructor(props){
        super(props);

        this.state ={};
        this.state.filterText = "";
        this.state.products = [
            {
                id:1,
                category: 'Sporting Goods',
                price: '49.99',
                qty: 12,
                name: 'football'
            },
            {
                id:2,
                category: 'Sporting Goods',
                price: '9.99',
                qty: 15,
                name: 'baseball' 
            },
            {
                id:3,
                category: 'Sporting Goods',
                price: '29.99',
                qty: 12,
                name: 'basketball'
            },
            {
                id:4,
                category: 'Electronics',
                price: '99.99',
                qty: 34,
                name: 'iphone 15'
            },
            {
                id:5,
                category: 'Electronics',
                price: '199.99',
                qty: 23,
                name: 'nexus 7'
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
            category: "",
            price: "",
            qty: "",
            name: ""
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
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Category</th>
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
                        "type":"price",
                        value: this.props.product.price,
                        id: this.props.product.id
                    }}/>
                    <EditableCell OnProductTableUpdate={this.props.OnProductTableUpdate}
                    cellData={{
                        "type":"qty",
                        value: this.props.product.qty,
                        id: this.props.product.id
                    }}/>
                    <EditableCell OnProductTableUpdate={this.props.OnProductTableUpdate}
                    cellData={{
                        "type":"catagory",
                        value: this.props.product.category,
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
export default Products;