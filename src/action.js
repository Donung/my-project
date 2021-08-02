import axios from 'axios';
export const delProduct = (id) => {
    return (dispatch) => {
        axios.delete(`http://localhost:4000/api/delete-product/${id}`)
            .then((res) => {
                dispatch({
                    type: 'DEL_PRODUCT',
                    playload: res.data._id
                });
            });
    }
}
export const addProduct = (data) => {
    return (dispatch) => {
        axios.post('http://localhost:4000/api/create-product', data)
            .then((res) => {
                dispatch({
                    type: 'ADD_PRODUCT',
                    playload: res.data
                });
            });
    }
}
export const editProduct = (data) => {
    return (dispatch) => {
        axios.put(`http://localhost:4000/api/update-product/${data._id}`, data)
            .then((res) => {
                dispatch({
                    type: 'EDIT_PRODUCT',
                    playload: res.data
                });
            });
    }
}
export const getProduct = (id) => {
    return (dispatch) => {
        axios.get(`http://localhost:4000/api/edit-product/${id}`)
            .then(() => {
                dispatch({
                    type: 'GET_PRODUCTT',
                    playload: id
                });
            });
    }
}
export const getProductLists = () => {
    return (dispatch) => {
        axios.get('http://localhost:4000/api/products/')
            .then((res) => {
                dispatch({
                    type: 'GET_PRODUCT_LISTS',
                    playload: res.data
                });
            });
    }
}

export const getProductItLists = (category) => {
    return (dispatch) => {
        axios.get(`http://localhost:4000/api/products/${category}`)
        .then((res) => {
            dispatch({
                type: 'GET_PRODUCT_IT_LISTS',
                playload: res.data
            })
        })
    }
}
