import { Input } from "@chakra-ui/react";
import React, { FunctionComponent, useEffect } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { actionCreators } from "../../state/action-creaters";
import debounce from "../../utils/debounce";
import COMMON_SIZES from "../../utils/shared/common_sizes";
import SearchSuggestionsBox from "../SearchSuggestionsBox/SearchSuggestionsBox";

/**
 * @description SearchBar Component will be responsible for taking inputs from user by rendering a search input box & update the application state respectively to show expected output
 * @returns SearchBar
 */
const SearchBar: FunctionComponent = () => {
  const dispatch: Dispatch = useDispatch();

  const ACTION_CREATORS = bindActionCreators(actionCreators, dispatch);

  useEffect(() => {
    ACTION_CREATORS.getSearchResults("macbook");
    // eslint-disable-next-line
  }, []);

  type GetSearchSuggestionsFunction = (searchQuery: string) => void;
  const getSearchSuggestions: GetSearchSuggestionsFunction = (searchQuery) => {
    if (searchQuery) {
      ACTION_CREATORS.getSearchSuggestions(searchQuery);
    } else {
      ACTION_CREATORS.resetSearchSuggestions();
    }
  };

  type GetSearchResultsFunction = (event: any) => void;
  const getSearchResults: GetSearchResultsFunction = (e) => {
    if (e?.key === "Enter") {
      let searchQuery: string = e?.target?.value;
      searchQuery = searchQuery.trim();
      let searchBox: any = document.getElementById("search-box");
      searchBox.value = searchQuery;
      let regex = /^[a-zA-Z0-9_ ]*$/;
      if (searchQuery && searchQuery.match(regex)) {
        ACTION_CREATORS.resetFeaturedContentIndex();
        ACTION_CREATORS.resetSearchResults();
        ACTION_CREATORS.getSearchResults(searchQuery);
        ACTION_CREATORS.resetSearchSuggestions();
      }
    }
  };

  return (
    <>
      <Input
        id="search-box"
        placeholder={`Type here to Search...`}
        borderBottomWidth="4px"
        _hover={{ borderBottomColor: "rgba(174, 38, 94, 60%)" }}
        borderBottomColor="rgba(174, 38, 94, 60%)"
        borderRadius="0"
        color="#AE265E"
        _focus={{ borderBottomColor: "#EC1063" }}
        height={COMMON_SIZES.TOP_NAVIGATION_BAR_HEIGHT}
        fontSize={["9vw", "7vw", "5vw"]}
        padding="8px 16px"
        onInput={debounce(
          (e: any) => getSearchSuggestions(e?.target?.value),
          124
        )}
        onKeyUp={getSearchResults}
      />
      <SearchSuggestionsBox />
    </>
  );
};

export default SearchBar;
