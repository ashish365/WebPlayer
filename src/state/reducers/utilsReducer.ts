import Utils, { initialUtils } from "../models/utils";

const utilsReducer = (state: Utils = initialUtils , action: any): Utils => {
    switch(action.type){
        case 'UPDATE_FEATURED_CONTENT':
            if(state.featured_content_index !== action?.payload){
                if(window.innerWidth <= 480){
                    window.scrollTo(0, 0);   
                }
                return { ...state, featured_content_index: action?.payload };
            }
            return state;
        case 'UPDATING_FEATURED_CONTENT':
            return { ...state, isFeaturedContentUpdated: false };
        case 'UPDATED_FEATURED_CONTENT':
            return { ...state, isFeaturedContentUpdated: true };
        case 'FETCHING_SEARCH_RESULTS':
            return { ...state, isFetchingSearchResults: true, isFetchedSearchResults: false };
        case 'FETCHED_SEARCH_RESULTS':
            return { ...state, isFetchedSearchResults: true, isFetchingSearchResults: false };
        case 'RESET_SELECTED_INDEX':
            return { ...state, featured_content_index: 0 };
        default:
            return state;
    }
};

export default utilsReducer;