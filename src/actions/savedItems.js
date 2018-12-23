export const addItem = (name, fatValue, carbValue, protValue, fiberValue) => ({
    type: 'ADD_SAVED_ITEM',
    id: name,
    fatValue,
    carbValue,
    protValue,
    fiberValue,
});