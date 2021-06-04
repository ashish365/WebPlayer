import SearchResult, { initialSearchResults } from "../models/search_result";

const searchResultsReducer = (state: Array<SearchResult> = initialSearchResults , action: any): Array<SearchResult> => {

    switch(action.type){
        case 'UPDATE_SEARCH_RESULTS':
            let search_results: Array<SearchResult> = [];
            action?.payload?.forEach((item: any) => {
                let search_result: SearchResult = {
                    title: `${item?.snippet?.title}`,
                    resource_url: `https://www.youtube.com/embed/${item?.id?.videoId}`,
                    description: `${item?.snippet?.description}`,
                    thumbnail_url: `${item?.snippet?.thumbnails?.high?.url}`,
                };
                search_results.push(search_result);
            });
            return search_results;
        case 'RESET_SEARCH_RESULTS':
            return [];
        default:
            return state;
    }
};

export default searchResultsReducer;