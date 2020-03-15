// Created by David Walshe on 09/03/2020

export const addItem = (item) => ({
    type: "ADD",
    item: Object.assign({}, item),
});

export const syncCart = (items) => ({
    type: "SYNC",
    items: items
});

export const removeItem = (productID) => ({
    type: "REMOVE",
    productID
});

export const removeAll = () => ({
    type: "REMOVE_ALL"
});

