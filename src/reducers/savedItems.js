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
                    points: calculatePointsValue(action.fatValue, action.carbValue, action.protValue, action.fiberValue),
                    isSelected: true
                }
            ];
        case 'REMOVE_SAVE_ITEM':
            return state.filter(t => t.id !== action.name)
        case 'SET_SELECTED_ITEM':
            console.log("curr selected is: " + action.name)
            return state.map(item => (
                (item.id === action.name) ? {...item, isSelected: true} : {...item, isSelected: false}
            ));
        default:
            return state;
    }
};

export default savedItems;