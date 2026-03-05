import { configureStore } from '@reduxjs/toolkit'

const initialState = {
    count: 0
}
export const COUNTER_ACTION_TYPES = {
    INCREMENT: 'INCREMENT',
    DECREMENT: 'DECREMENT'
}

function counterReducer(state=initialState, action) {
    switch(action.type) {
        case COUNTER_ACTION_TYPES.INCREMENT:
            const incPayload = action.payload;
            return {count: state.count+incPayload.by}
        case COUNTER_ACTION_TYPES.DECREMENT:
            const decPayload = action.payload;
            return {count: state.count-decPayload.by}
        default:
            return state;
    }
}

const store = configureStore({
    reducer: {counter: counterReducer},
    devTools: true
})

export default store