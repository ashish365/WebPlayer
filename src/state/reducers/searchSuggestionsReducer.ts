
const searchSuggestionsReducer = (state: Array<string> = [] , action: any): Array<string> => {
    switch(action.type){
        case 'FETCHED_SEARCH_SUGGESTIONS':
            return action.payload;
        case 'RESET_SEARCH_SUGGESTIONS':
            return [];
        default:
            return state;
    }
};

export default searchSuggestionsReducer;