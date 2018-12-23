const initialState = {
    fat: {
        id: 'fat',
        text: "FAT",
        value: ''
    },
    carb: {
        id: 'carb',
        text: "CARB",
        value: ''
    },
    prot: {
        id: 'prot',
        text: 'PROT',
        value: ''
    },
    fiber: {
        id: 'fiber',
        text: 'FIBER',
        value: ''
    }
}


const fields = (state = initialState, action) => {
    switch (action.type) {
        case 'VALUE_CHANGE':
            let new_fields = {};
            for (var field of ['fat', 'carb', 'prot', 'fiber']) {
                new_fields[field] = state[field];
                if (action.id === field) {
                    new_fields[field].value = action.value
                }
            }
            return new_fields;
        default:
            return state;
    }
};

export default fields;