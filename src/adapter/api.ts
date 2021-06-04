/**
 * This file contains functions & constants which are responsible to provide the correct api endpoints
 */

/**
 * @description String constant for google's search suggestions api endpoint
 */
const GOOGLE_SEARCH_SUGGESTIONS_API: string = `https://search-suggestions-api.herokuapp.com/`;

//Code Mentor: AIzaSyAhIcGwUsCX_w1d4t0dMjKujYrAI15P0FA
//My Personal: AIzaSyCmtIfcn5YjyoS1nPPQI3NTVCvwtg8sPUE
/**
 * @description API Key to access youtube Data API
 */
const API_KEY = "AIzaSyAhIcGwUsCX_w1d4t0dMjKujYrAI15P0FA";

/**
 * @description String constant for youtube's search api endpoint
 */
const YOUTUBE_SEARCH_RESULTS_API: string = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=7&regionCode=IN&order=viewCount&key=${API_KEY}`;

/**
 * @description Function to generate google's search suggestions API Endpoint based on the search query
 * @param searchQuery search query
 * @returns google's search suggestions API Endpoint
 */

const generateGoogleSearchSuggestionsAPIURL = (searchQuery: string): string => {
    return `${GOOGLE_SEARCH_SUGGESTIONS_API}?q=${encodeURI(searchQuery)}`;
};

/**
 * @description Function to generate youtube's search API Endpoint based on the search query
 * @param searchQuery search query
 * @returns youtube's search API Endpoint
 */
const generateYoutubeSearchResultsAPIURL = (searchQuery: string): string => {
    return `${YOUTUBE_SEARCH_RESULTS_API}&q=${encodeURI(searchQuery)}`;
};


/**
 * @description This function is responsible for fetching youtube search results from youtube data api
 * @param searchQuery search query
 * @returns Promise that will resolve or reject based on API call
 */
export const fetchYoutubeSearchResults = (searchQuery: string) => {
    return new Promise(async (resolve, reject) => {
        try {
            let raw = await fetch(generateYoutubeSearchResultsAPIURL(searchQuery));
            let json: any = await raw.json();   
            
            resolve(json);
        } catch (error) {
            reject(error);
        }
    });
};

/**
 * @description This function is responsible for fetching google search suggestions results from google's api
 * @param searchQuery search query
 * @returns Promise that will resolve or reject based on API call
 */
export const fetchGoogleSearchSuggestions = (searchQuery: string) => {
    return new Promise(async (resolve, reject) => {
        try {
            let raw = await fetch(generateGoogleSearchSuggestionsAPIURL(searchQuery));
            let json: any = await raw.json();

            resolve(json);
        } catch (error) {
            reject(error);
        }
    });
};