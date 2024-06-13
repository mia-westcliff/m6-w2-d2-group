import { ADD_ITEM, UPDATE_ITEM, DELETE_ITEM } from './actionTypes';

export const addItem = (itemId, itemName, itemPrice, itemDesc, qty) => {
  return {
    type: ADD_ITEM,
    payload: {
      itemId,
      itemName,
      itemPrice,
      itemDesc,
      qty
    }
  };
};

export const updateItem = (itemId, qty) => {
  return {
    type: UPDATE_ITEM,
    payload: { itemId, qty }
  };
};

export const deleteItem = (itemId) => {
  return {
    type: DELETE_ITEM,
    payload: { itemId }
  };
};
