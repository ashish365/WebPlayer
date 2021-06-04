import { AspectRatio, ListItem, Text } from "@chakra-ui/react";
import { FunctionComponent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { actionCreators } from "../../state/action-creaters";
import AppState from "../../state/models/app_state";
import SearchResult from "../../state/models/search_result";
import Utils from "../../state/models/utils";

interface SuggestionListItemProps {
    item: SearchResult,
    index: number,
}

/**
 * @description SuggestionListItem Component will render a small thumbnail for the search results
 * @param props SuggestionListItemProps
 * @returns SuggestionListItem
 */
const SuggestionListItem: FunctionComponent<SuggestionListItemProps> = (props) => {

    const dispatch: Dispatch = useDispatch();

    const ACTION_CREATORS = bindActionCreators(actionCreators, dispatch);

    const utils: Utils = useSelector((state: AppState) => state.utils);

    type UpdateFeaturedContentFunction = () => void;
    const updateFeaturedContent: UpdateFeaturedContentFunction = () => {
        if(utils.featured_content_index !== props?.index){
            ACTION_CREATORS.updatingFeaturedContent();
            ACTION_CREATORS.updateFeaturedContent(props?.index);
        }
    };

    return (
        <ListItem width="100%" backgroundColor={utils?.featured_content_index === props?.index? "green.100": "pink.100"} boxShadow="grey 0 0 4px" borderRadius="4px" padding="4px" cursor="pointer" onClick={updateFeaturedContent}>
            <AspectRatio display={["none", "none", "block"]} maxH="80%" ratio={ 2 / 1 }>
                <img src={props?.item?.thumbnail_url?.toString()} alt={props?.item?.title } />
            </AspectRatio>
            <Text marginTop="4px" marginLeft={["4px", "4px", "0"]}> {props?.item?.title} </Text>
        </ListItem>
    );
}

export default SuggestionListItem;