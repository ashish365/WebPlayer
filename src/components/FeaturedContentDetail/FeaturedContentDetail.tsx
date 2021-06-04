import { Container, Heading, Skeleton, SkeletonText, Text } from "@chakra-ui/react";
import React, { FunctionComponent } from "react";
import { useSelector } from "react-redux";
import AppState from "../../state/models/app_state";
import SearchResult from "../../state/models/search_result";
import Utils from "../../state/models/utils";

interface FeaturedContentDetailProps {
    featuredContent: SearchResult,
}

/**
 * @description FeaturedContentDetail Component will render the title & description of the featured content which is passed as argument to it
 * @param props FeaturedContentDetailProps
 * @returns FeaturedContentDetail
 */
const FeaturedContentDetail: FunctionComponent<FeaturedContentDetailProps> = (props) => {

    const utils: Utils = useSelector((state: AppState) => state.utils);

    return (
        <Container minWidth="100%" height="100%" padding="4px" marginTop="4px" borderRadius="4px" boxShadow="grey 0px 0px 4px">
            <Skeleton height={(utils.isFetchedSearchResults && utils.isFeaturedContentUpdated)? "auto": "24px"} isLoaded={utils.isFetchedSearchResults && utils.isFeaturedContentUpdated}>
                <Heading as="h3" size="md"> {props?.featuredContent?.title} </Heading>
            </Skeleton>
            <SkeletonText marginTop="8px" isLoaded={utils.isFetchedSearchResults && utils.isFeaturedContentUpdated} noOfLines={4}>
                <Text>{props?.featuredContent?.description}</Text>
            </SkeletonText>           
        </Container>
    );
}

export default FeaturedContentDetail;