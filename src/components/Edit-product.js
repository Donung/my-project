import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as action from '../action';
class EditProduct extends Component {
    state = {
        _id: '',
        id: '',
        name: '',
        stock: 0,
        price: 0
    }
    onChangeData = (event) => {
        this.setState(
            {
                [event.target.name]: event.target.value
            }
        )
    }

    componentDidMount() {
        const userId = this.props.match.params.id;
        const product = this.getCurrentProduct(userId);
        if (product) {
            this.setState({
                _id: product._id,
                id: product.id,
                name: product.name,
                stock: product.stock,
                price: product.price
            })
        } else {
            this.props.history.push('/');
        }
    }
    getCurrentProduct(id) {
        const allProducts = this.props.productsFromStore;
        const [product] = allProducts.filter((item) => {
            return item._id.toString() === id.toString();
        });
        return product;
    }
    onSubmitProductForm = (data, event) => {
        event.preventDefault();
        const newData = {
            _id: data._id,
            id: data.id,
            name: data.name,
            stock: data.stock,
            price: data.price
        }
        this.props.editProductAtStore(newData);
        this.props.history.push('/');
    }
    render() {
        return (
            <div className="row mt-3 mb-5 ml-5 mr-5">
                <div className="card col-12 col-sm-8 col-lg-6 mx-auto">
                    <div className="card-body">
                        <form onSubmit={this.onSubmitProductForm.bind(this, this.state)}>
                            <div className="block-4 text-center">
                                <img
                                    className="img img-thumbnail mt-1 mb-2"
                                    src="http://lorempixel.com/150/150/sports/" alt="โลโก้"
                                />
                            </div>
                            <div className="form-group">
                                <label>รหัสสินค้า</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="id"
                                    value={this.state.id}
                                    onChange={this.onChangeData} />
                            </div>
                            <div className="form-group">
                                <label>ชื่อสินค้า</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="name"
                                    value={this.state.name}
                                    onChange={this.onChangeData} />
                            </div>
                            <div className="form-group">
                                <label>จำนวนสินค้า</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    name="stock"
                                    value={this.state.stock}
                                    onChange={this.onChangeData} />
                            </div>
                            <div className="form-group">
                                <label>ราคาสินค้า</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    name="price"
                                    value={this.state.price}
                                    onChange={this.onChangeData} />
                            </div>
                            <div className="form-group text-center pt-3">
                                <button
                                    onClick={() => this.props.history.push('/')}
                                    className="btn btn-outline-success mr-1">ยกเลิก</button>
                                <button
                                    type="submit"
                                    className="btn btn-primary ml-1">แก้ไข</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        productsFromStore: state.products
    }
}
const mapDispatchToProps = dispatch => {
    return {
        editProductAtStore: (data) => {
            return dispatch(action.editProduct(data))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(EditProduct);
