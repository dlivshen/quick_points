import { calculatePointsValue } from "../logic/PointsCalculations";

const initialState = []

const savedItems = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_SAVED_ITEM':
            return [
                ...state,
                {
                    id: action.id,
                    text: action.id,
                    fatValue: action.fatValue,
                    carbValue: action.carbValue,
                    protValue: action.protValue,
                    fiberValue: action.fiberValue,
                    points: calculatePointsValue(action.fatValue, action.carbValue, action.protValue, action.fiberValue)
                }
            ];
        default:
            return state;
    }
};

export default savedItems;