import { Card, CardBody, Chip } from "@heroui/react";
import { FaRegUser } from "react-icons/fa";
import { CiShoppingTag } from "react-icons/ci";
import { MdOutlineDateRange } from "react-icons/md";

import styled from "styled-components";

export const ViewSideBar = () => {
    return (
        <ViewSideBarWrapper className="col-span-3 border-l border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-4 flex flex-col">
            <div className="flex flex-col gap-4">
                <Card>
                    <CardBody className="flex flex-col gap-2 p-5">
                        <div className="flex gap-2 items-start text-xl font-bold">
                            <FaRegUser />
                            About
                        </div>
                        <div className="text-sm text-gray-500">
                            Welcome to my personal space where I share daily thoughts, experiences, and reflections. Join me on this journey of self-discovery and mindful living.
                        </div>
                    </CardBody>
                </Card>

                <Card>
                    <CardBody className="flex flex-col gap-2 p-5">
                        <div className="flex gap-2 items-start text-xl font-bold">
                            <CiShoppingTag size={25} />
                            Nhãn
                        </div>
                        <div className="text-sm flex flex-col gap-2">
                            <div className="flex gap-2 items-center justify-between">
                                <Chip size="sm" variant="bordered">Cuộc sống</Chip>
                                <span className="text-sm text-gray-500">10</span>
                            </div>
                            <div className="flex gap-2 items-center justify-between">
                                <Chip size="sm" variant="bordered">Món ăn</Chip>
                                <span className="text-sm text-gray-500">10</span>
                            </div>
                            <div className="flex gap-2 items-center justify-between">
                                <Chip size="sm" variant="bordered">Giải trí</Chip>
                                <span className="text-sm text-gray-500">10</span>
                            </div>


                        </div>
                    </CardBody>
                </Card>

                <Card>
                    <CardBody className="flex flex-col gap-2 p-5">
                        <div className="flex gap-2 items-start text-xl font-bold">
                            <MdOutlineDateRange />
                            Thống kê
                        </div>
                        <div className="text-sm flex flex-col gap-2">
                            <div className="flex gap-2 items-center justify-between">
                                <span className="text-sm">Tháng 1</span>
                                <Chip size="sm" variant="flat">10</Chip>
                            </div>
                            <div className="flex gap-2 items-center justify-between">
                                <span className="text-sm">Tháng 2</span>
                                <Chip size="sm" variant="flat">10</Chip>
                            </div>
                            <div className="flex gap-2 items-center justify-between">
                                <span className="text-sm">Tháng 3</span>
                                <Chip size="sm" variant="flat">10</Chip>
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </div>
        </ViewSideBarWrapper>
    )
}

const ViewSideBarWrapper = styled.div`
    width: 100%;
    height: 100%;
`;