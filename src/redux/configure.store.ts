import { createStore } from "redux"
import setUserReducer from "./reducers/setUser.reducer"

const configureStore = () => {
  return createStore(setUserReducer);
}

export default configureStore;