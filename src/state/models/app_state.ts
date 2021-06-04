import SearchResult, { initialSearchResults } from "./search_result";
import Utils, { initialUtils } from "./utils";

interface AppState {
    'search_results': Array<SearchResult>,
    'search_suggestions': Array<string>,
    'utils': Utils,
}

export default AppState;

export const initialAppState: AppState = {
    search_results: initialSearchResults,
    search_suggestions: [],
    utils: initialUtils,
};