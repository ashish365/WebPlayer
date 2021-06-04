import { combineReducers } from "redux";
import searchResultsReducer from "./searchResultsReducer";
import searchSuggestionsReducer from "./searchSuggestionsReducer";
import utilsReducer from "./utilsReducer";

const reducers = combineReducers({
    'search_results': searchResultsReducer,
    'search_suggestions': searchSuggestionsReducer,
    'utils': utilsReducer,
});

export default reducers;