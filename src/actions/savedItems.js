export const addItem = (name, fatValue, carbValue, protValue, fiberValue) => ({
    type: 'ADD_SAVED_ITEM',
    id: name,
    fatValue,
    carbValue,
    protValue,
    fiberValue,
});

export const removeItem = (name) => ({
    type: 'REMOVE_SAVE_ITEM',
    name
});

export const setSelected = (name) => ({
    type: 'SET_SELECTED_ITEM',
    name
});