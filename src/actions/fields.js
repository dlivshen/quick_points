export const valueChange = (id, newValue) => ({
    type: 'VALUE_CHANGE',
    id: id,
    value: newValue
});

export const setValues = (fat, carb, prot, fiber) => ({
    type: 'SET_VALUES',
    fat,
    carb,
    prot,
    fiber
});