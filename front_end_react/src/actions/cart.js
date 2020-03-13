// Created by David Walshe on 09/03/2020

export const addItem = (item, buyQuantity) => ({
    type: "ADD",
    item: Object.assign({}, item),
    buyQuantity
});

export const removeItem = (item) => ({
    type: "REMOVE",
    item: item
});