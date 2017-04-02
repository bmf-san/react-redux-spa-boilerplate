import {combineReducers} from 'redux';
import SampleReducer from './reducer_sample';

const rootReducer = combineReducers({records: SampleReducer});

export default rootReducer;
