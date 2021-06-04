import { Container, Text } from "@chakra-ui/react";
import React, { FunctionComponent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { actionCreators } from "../../state/action-creaters";
import AppState from "../../state/models/app_state";

/**
 * @description This component will show user a list of search suggestions
 * @returns SearchSuggestionsBox
 */
const SearchSuggestionsBox: FunctionComponent = () => {

    const result: Array<string> = useSelector((state: AppState) => state.search_suggestions);

    const dispatch: Dispatch = useDispatch();

    const ACTION_CREATORS = bindActionCreators(actionCreators, dispatch);

    type UpdateSearchResultsFunction = (event: any) => void;
    const updateSearchResults: UpdateSearchResultsFunction = (e) => {
        ACTION_CREATORS.resetFeaturedContentIndex();
        ACTION_CREATORS.resetSearchResults();
        ACTION_CREATORS.getSearchResults(e?.target?.innerText);
        ACTION_CREATORS.resetSearchSuggestions();
        let searchBox: any = document.getElementById("search-box");
        searchBox.value = e?.target?.innerText;
    };

    type RenderSuggestionsFunction = () => Array<any>;
    const renderSuggestions: RenderSuggestionsFunction = () => {
        return result.map((suggestion: string) => {
            return (
            <Text marginY="4px" onClick={updateSearchResults} key={suggestion} _hover={{backgroundColor: "#EEEEEE", cursor: "pointer" }} borderRadius="7px" padding="4px 12px">{suggestion}</Text>
            );
        });
    };

    return (
        <Container paddingX="4px" minWidth="full" position="absolute" zIndex="1" backgroundColor="white" boxShadow="grey 0 0 8px" borderBottomRadius="8px">
            {renderSuggestions()}
        </Container>
    );
}

export default SearchSuggestionsBox;