// Action Types
export const Types = {
    REQUEST: 'FEATURE_REQUEST',
};

// Reducer
const INITIAL_STATE = {
    stateProp: 'initial'
}

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case Types.REQUEST:
            console.log('Feature Request')
            return { ...state, stateProp: 'set' };
            break;
        default:
            return state;
            break;
    }
}
export default reducer;

// Action Creators
export const Creators = {
    featureRequest: () => ({
        type: Types.REQUEST,
    })
}