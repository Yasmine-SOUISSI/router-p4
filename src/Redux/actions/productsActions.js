import { ADD_PRODUCT, DELETE_PRODUCT } from "../actionsTypes/productsActions";

const addProduct = (product) => {
    return {
        type: ADD_PRODUCT,
        payload: product,
    };
}

const deleteProduct = (id) => {
    return {
        type: DELETE_PRODUCT,
        payload: id,
    };
};



export { addProduct, deleteProduct }