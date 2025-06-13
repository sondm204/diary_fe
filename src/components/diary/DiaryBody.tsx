import styled from "styled-components";
import { DiarySideBar } from "./DiarySideBar";
import { DiaryList } from "./DiaryList";

export const DiaryBody = () => {
  return (
    <DiaryBodyWrapper className="flex dark:bg-[#282135] bg-gray-100">
      <DiarySideBar />
      <DiaryList />
    </DiaryBodyWrapper>    
  );
}

const DiaryBodyWrapper = styled.div`
  width: 100%;
  height: 100vh;
`;
