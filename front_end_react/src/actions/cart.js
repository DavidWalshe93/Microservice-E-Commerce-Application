// Created by David Walshe on 09/03/2020

export const addItem = (item) => ({
    type: "ADD",
    item: Object.assign({}, item),
});

export const removeItem = (item) => ({
    type: "REMOVE",
    item: item
});