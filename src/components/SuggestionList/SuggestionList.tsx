import { Box, List, Skeleton } from "@chakra-ui/react";
import React, { FunctionComponent } from "react";
import SearchResult from "../../state/models/search_result";
import COMMON_SIZES from "../../utils/shared/common_sizes";
import SuggestionListItem from "../SuggestionListItem/SuggestionListItem";

interface SuggestionListProps {
    suggestions: Array<SearchResult>,
}

type RenderSuggestionListItemsFunction = (suggestions: Array<SearchResult>) => Array<any>;
const renderSuggestionListItems: RenderSuggestionListItemsFunction = (suggestions) => {
    if(suggestions?.length > 0){
        return suggestions?.map((item: SearchResult, index) => <SuggestionListItem key={index} index={index} item={item} />);
    }
    return [1,2,3,4,5].map((item: number) => <Skeleton height={["51px", "51px", "180px"]} key={item} />);
}

/**
 * @description SuggestionList Component will render a list of SuggestionListItem component
 * @param props SuggestionListProps
 * @returns SuggestionList
 */
const SuggestionList: FunctionComponent<SuggestionListProps> = (props) => {
    return (
        <Box id="suggestions-list" width={["100vw", "100vw", "30vw"]} overflowY="scroll" height={["auto", "auto", `calc(100vh - ${COMMON_SIZES.TOP_NAVIGATION_BAR_HEIGHT})`]} flex="1">
            <List spacing="6px" padding="4px">
                {renderSuggestionListItems(props.suggestions)} 
            </List>
        </Box> 
    );
}

export default SuggestionList;