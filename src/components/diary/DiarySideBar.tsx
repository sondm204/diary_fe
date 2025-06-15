import { Button, Listbox, ListboxItem } from "@heroui/react";
import styled from "styled-components";
import { FaPlus, FaNewspaper, FaArrowUpRightFromSquare } from "react-icons/fa6";
import { FaChartBar, FaCommentAlt } from "react-icons/fa";


export const DiarySideBar = () => {
    return (
        <DiarySideBarWrapper className="w-64 border-r border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-4 flex flex-col">
            <div className="pb-2 border-b border-gray-200 dark:border-gray-700">
                <Button
                    startContent={<FaPlus />}
                    radius="full"
                    variant="flat"
                    color="warning"
                    className="w-full text-lg"
                >
                    Bài đăng mới
                </Button>
            </div>

            <ListBoxWrapper>
                <Listbox variant="flat">
                    <ListboxItem startContent={<FaNewspaper />} key="post" className="h-10">
                        Bài đăng
                    </ListboxItem>
                    <ListboxItem startContent={<FaChartBar />} key="statistic" className="h-10">
                        Thống kê
                    </ListboxItem>
                    <ListboxItem showDivider startContent={<FaCommentAlt />} key="comment" className="h-10">
                        Nhận xét
                    </ListboxItem>
                    <ListboxItem key="redirect" startContent={<FaArrowUpRightFromSquare className="h-10" />}
                    >
                        Xem nhật ký
                    </ListboxItem>
                </Listbox>
            </ListBoxWrapper>
        </DiarySideBarWrapper>
    )
}

const DiarySideBarWrapper = styled.div`
`;

const ListBoxWrapper = styled.div`
`;
