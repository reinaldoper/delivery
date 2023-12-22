// reducers/index.tsx
import { combineReducers } from 'redux';
import reducerFetch from './reducer';

export interface RootState {
  reducerFetch: {
    update: boolean;
  };

}

const rootReducer = combineReducers({
  reducerFetch,
});

export default rootReducer;
