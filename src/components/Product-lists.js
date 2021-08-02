import React, { Component } from 'react';
import Product from './Product';
import { connect } from 'react-redux';
import * as action from '../action';
class ProductLists extends Component {
    render() {
        const allProducts = this.props.productsFromStore;
        return (
            <div className="row">
                {allProducts.length !== 0 ?
                    allProducts.map((item, index) => {
                        return <div className="col-12 col-sm-6 col-lg-4 mt-3" key={index}>
                            <Product data={item} key={item._id} />
                        </div>
                    }) :
                    <div className="col-12 mx-auto">
                        <div className="alert-info text-center pt-5 pb-5">ไม่พบข้อมูลสินค้า</div>
                    </div>
                }
            </div>
        )
    }
    componentDidMount() {
        this.props.getAllPruducts();
    }
}
const mapStateToProps = state => {
    return {
        productsFromStore: state.products
    }
}
const mapDispatchToProps = dispatch => {
    return {
        getAllPruducts: () => {
            return dispatch(action.getProductLists());
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductLists);
