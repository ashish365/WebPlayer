import { fetchGoogleSearchSuggestions, fetchYoutubeSearchResults } from "../../adapter/api";

export const getSearchResults = (searchQuery: string) => {
    return async (dispatch: any) => {
        dispatch({
            type: 'FETCHING_SEARCH_RESULTS'
        });
        let json: any = await fetchYoutubeSearchResults(searchQuery);
        if(!json?.error){
            dispatch({
                type: 'FETCHED_SEARCH_RESULTS'
            });
            dispatch({
                type: 'UPDATE_SEARCH_RESULTS',
                payload: json['items'],
            });
        }
        dispatch({
            type: 'RESET_SEARCH_SUGGESTIONS',
        });
    };
};

export const resetSearchResults = () => {
    return (dispatch: any) => {
        dispatch({
            type: 'RESET_SEARCH_RESULTS'
        });
    };
};

export const getSearchSuggestions = (searchQuery: string) => {
    return async (dispatch: any) => {
        let json: any = await fetchGoogleSearchSuggestions(searchQuery);
        dispatch({
            type: 'FETCHED_SEARCH_SUGGESTIONS',
            payload: json,
        });
    };
};

export const resetSearchSuggestions = () => {
    return (dispatch: any) => {
        dispatch({
            type: 'RESET_SEARCH_SUGGESTIONS',
        });
    };
};

export const updateFeaturedContent = (index: number) => {
    return (dispatch: any) => {
        dispatch({
            type: 'UPDATE_FEATURED_CONTENT',
            payload: index,
        });
    };
};

export const updatingFeaturedContent = () => {
    return (dispatch: any) => {
        dispatch({
            type: 'UPDATING_FEATURED_CONTENT',
        });
    };
};

export const updatedFeaturedContent = () => {
    return (dispatch: any) => {
        dispatch({
            type: 'UPDATED_FEATURED_CONTENT',
        });
    };
};

export const loadingInitialSearchResults = () => {
    return (dispatch: any) => {
        dispatch({
            type: 'FETCHING_SEARCH_DATA'
        });
    };
};

export const resetFeaturedContentIndex = () => {

    let suggestionsList = document.getElementById("suggestions-list");
    suggestionsList?.scrollTo(0,0);

    return (dispatch: any) => {
        dispatch({
            type: 'RESET_SELECTED_INDEX'
        });
    };
};