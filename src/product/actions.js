import * as types from "./constants";

export const addNewProduct = product => { 
                                            return { type: types.ADD_NEW_PRODUCT, 
                                                    item: {
                                                        name : product.name,
                                                        id : product.id,
                                                        brandId : product.brandId,
                                                        qty : 1
                                                    }
                                            }
                            }

export const removeProduct = id => ({ type: types.REMOVE_PRODUCT, id })

export const updateProduct = (id, product) => ({ type: types.UPDATE_PRODUCT,  product })
