import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as action from '../action';
class Product extends Component {
    render() {
        const delFn = this.props.deleteProductAtStore;
        return (
            <div className="card">
                <div className="card-header">
                    รหัสสินค้า: {this.props.data.id}
                    <button
                        className="btn btn-outline-danger btn-sm float-end ml-1"
                        onClick={delFn.bind(this, this.props.data._id)}
                    >ลบ</button>
                    <Link to={`/edit/${this.props.data._id}`}>
                        <button
                            className="btn btn-success btn-sm float-end"
                        >แก้ไข</button>
                    </Link>
                </div>
                <div className="card-body">
                    <div className="block-4 text-center">
                        <img
                            className="img img-thumbnail mt-1 mb-3"
                            src="http://lorempixel.com/150/150/sports/" alt="โลโก้"
                        />
                    </div>
                    ชื่อสินค้า: {this.props.data.name}
                    <br />
                    ประเภท: {this.props.data.category}
                    <br />
                    ราคาสินค้า: {this.props.data.price} บาท
                    <br />
                    จำนวนสินค้า: {this.props.data.stock}
                </div>
            </div>
        )
    }
}
const mapDispatchToProps = dispatch => {
    return {
        deleteProductAtStore: (id) => {
            return dispatch(action.delProduct(id));
        }
    }
}
export default connect(null, mapDispatchToProps)(Product);
