interface SearchResult {
    'resource_url': String,
    'thumbnail_url': String,
    'description': String,
    'title': string,
}

export default SearchResult;

export const initialSearchResults: Array<SearchResult> = [];