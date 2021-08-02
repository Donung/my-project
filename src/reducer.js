const initialState = {
    products: []
}
const reducer = (state = initialState, action) => {
    const allProducts = [...state.products];
    switch (action.type) {
        case 'GET_PRODUCT_IT_LISTS':
            const allProductsItState = {
                ...state,
                products: action.playload
            }
            return allProductsItState;
        case 'GET_PRODUCT_LISTS':
            const allProductsState = {
                ...state,
                products: action.playload
            }
            return allProductsState;
        case 'DEL_PRODUCT':
            const newState = {
                ...state,
                products: state.products.filter(item => item._id !== action.playload)
            }
            return newState;
        case 'ADD_PRODUCT':
            const addedState = {
                ...state,
                products: [action.playload, ...state.products]
            }
            return addedState;
        case 'EDIT_PRODUCT':
            const indexForEdit = allProducts.findIndex((item) => {
                return item._id === action.playload._id;
            });
            console.log('index for editing', indexForEdit);
            allProducts[indexForEdit] = {
                id: action.playload.id,
                name: action.playload.name,
                category: action.playload.category,
                stock: action.playload.stock,
                price: action.playload.price,
            }
            const editedState = {
                ...state,
                products: allProducts
            }
            return editedState;
        default:
            break;
    }
    return state;
}
export default reducer;
