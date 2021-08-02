import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as action from '../action';
class AddProduct extends Component {

    state = {
        id: '',
        name: '',
        category: '',
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

    onSubmitProductForm = (data, event) => {
        event.preventDefault();
        const newData = {
            id: data.id,
            name: data.name,
            category: data.category,
            stock: data.stock,
            price: data.price
        }
        this.props.addProductAtStore(newData);
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
                                    className="img img-thumbnail mt-5 mb-3"
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
                                <label>ประเภท</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="category"
                                    value={this.state.category}
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
                                    className="btn btn-outline-success btn-sm mr-1">ยกเลิก</button>
                                <button
                                    type="submit"
                                    className="btn btn-sm btn-primary ml-1">เพิ่ม</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
const mapDispatchToProps = dispatch => {
    return {
        addProductAtStore: (newProductData) => {
            return dispatch(action.addProduct(newProductData));
        }
    }
}
export default connect(null, mapDispatchToProps)(AddProduct);
