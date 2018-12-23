export const calculatePointsValue = (fatValue, carbValue, protValue, fiberValue) => {
    const fat = parseFloat(fatValue);
    const carb = parseFloat(carbValue);
    const prot = parseFloat(protValue);
    const fiber = parseFloat(fiberValue);

    // Calculate the result according to the formula
    let result = (fat*0.2571429) + (carb*0.1085714) + (prot*0.0914286) - (fiber*0.08);

    // Make sure that the result does make logic
    result = Math.max(result, 0);
    result = Math.min(result, 100);

    return Math.round(result);
};