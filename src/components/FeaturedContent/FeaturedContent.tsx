import { AspectRatio, Box, Skeleton } from "@chakra-ui/react";
import React, { FunctionComponent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { actionCreators } from "../../state/action-creaters";
import AppState from "../../state/models/app_state";
import COMMON_SIZES from "../../utils/shared/common_sizes";
import FeaturedContentDetail from "../FeaturedContentDetail/FeaturedContentDetail";

/**
 * @description FeaturedContent Component will render selected video's details such as thumbnail, title & description.
 * @returns FeaturedContent
 */
const FeaturedContent: FunctionComponent = () => {

    const app_state: AppState = useSelector((state: AppState) => state);

    const dispatch: Dispatch = useDispatch();

    const ACTION_CREATORS = bindActionCreators(actionCreators, dispatch);

    return (
        <Box padding="4px" display="flex" flexDirection="column" position="relative" width={["100vw", "100vw", "70vw"]} flex="3" height={["auto", "auto", `calc(100vh - ${COMMON_SIZES.TOP_NAVIGATION_BAR_HEIGHT})`]} overflowY="scroll">
            <AspectRatio flex="2" maxHeight="80%" ratio={[3 / 2]}>
                <Skeleton isLoaded={app_state.utils.isFetchedSearchResults && app_state.utils.isFeaturedContentUpdated}>
                    <iframe height="100%" width="100%" onLoad={() => ACTION_CREATORS.updatedFeaturedContent()} title="naruto" src={app_state?.search_results[app_state?.utils?.featured_content_index]?.resource_url?.toString()} allowFullScreen />
                </Skeleton>
            </AspectRatio>
            <FeaturedContentDetail featuredContent={app_state?.search_results[app_state?.utils?.featured_content_index]} />
        </Box>
    );
}

export default FeaturedContent;