interface Utils {
    'isPageLoading': boolean,
    'isPageFinishedLoading': boolean,
    'isFetchingSearchResults': boolean,
    'isFetchedSearchResults': boolean,
    'featured_content_index': number,
    'isFeaturedContentUpdated': boolean,
}

export default Utils;

export const initialUtils: Utils = {
    isPageLoading: true,
    isPageFinishedLoading: false,
    isFetchingSearchResults: false,
    isFetchedSearchResults: false,
    featured_content_index: 0,
    isFeaturedContentUpdated: false,
};