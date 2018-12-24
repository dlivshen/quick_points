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
    let new_fields = {};
    switch (action.type) {
        case 'VALUE_CHANGE':
            console.log("fuckme");
            for (let field of ['fat', 'carb', 'prot', 'fiber']) {
                new_fields[field] = state[field];
                if (action.id === field) {
                    new_fields[field].value = action.value
                }
            }
            return new_fields;
        case 'SET_VALUES':
            for (let field of ['fat', 'carb', 'prot', 'fiber']) {
                new_fields[field] = state[field];
                new_fields[field].value = action[field]
            }
            return new_fields;
        default:
            return state;
    }
};

export default fields;