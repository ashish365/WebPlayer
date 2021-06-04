import { Wrap, WrapItem } from "@chakra-ui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import "./App.css";
import FeaturedContent from "./components/FeaturedContent/FeaturedContent";
import SearchBar from "./components/SearchBar/SearchBar";
import SuggestionList from "./components/SuggestionList/SuggestionList";
import { actionCreators } from "./state/action-creaters";
import AppState from "./state/models/app_state";
import SearchResult from "./state/models/search_result";

function App() {
  const searchResults: Array<SearchResult> = useSelector(
    (state: AppState) => state.search_results
  );
  const dispatch = useDispatch();

  const ACTION_CREATORS = bindActionCreators(actionCreators, dispatch);

  return (
    <>
      <SearchBar />
      <Wrap
        spacing="0"
        onClick={() => ACTION_CREATORS.resetSearchSuggestions()}
      >
        <WrapItem>
          <FeaturedContent />
        </WrapItem>
        <WrapItem>
          <SuggestionList suggestions={searchResults} />
        </WrapItem>
      </Wrap>
    </>
  );
}

export default App;
