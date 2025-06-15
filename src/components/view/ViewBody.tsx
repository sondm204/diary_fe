import styled from "styled-components";
import { ViewContent } from "./ViewContent";
import { ViewSideBar } from "./ViewSideBar";

export const ViewBody = () => {
    return (
        <ViewBodyWrapper className="grid grid-cols-12 dark:bg-[#282135] bg-gray-100">
            <ViewContent /> 
            <ViewSideBar />
        </ViewBodyWrapper>
    )
}

const ViewBodyWrapper = styled.div`
    width: 100%;
    height: 100vh;
`;
