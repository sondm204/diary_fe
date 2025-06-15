import styled from "styled-components";

export const ViewSideBar = () => {
    return (
        <ViewSideBarWrapper className="col-span-3 border-l border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-4 flex flex-col">
        </ViewSideBarWrapper>
    )
}

const ViewSideBarWrapper = styled.div`
    width: 100%;
    height: 100%;
`;