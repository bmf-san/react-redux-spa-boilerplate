import {FETCH_DATA, INPUT_NAME} from '../actions/index';

const INITIAL_STATE = {
    name: 'bmf-san',
    all: []
}

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case FETCH_DATA:
            return {
                ...state,
                all: action.payload.data
            };

        default:
            return state;
    }
}
