import { Avatar, Card, CardBody, Chip, Image, Select, SelectItem } from "@heroui/react"
import styled from "styled-components"

export const DiaryList = () => {
    return (
        <DiaryListWrapper className="w-full bg-white dark:bg-gray-800 p-8 flex flex-col">
            <div className="flex justify-between">
                <Select
                    className="w-40"
                    selectedKeys={["total"]}
                >
                    <SelectItem key="total" className="h-10">
                        Tất cả
                    </SelectItem>
                    <SelectItem key="published" className="h-10">
                        Đã công bố
                    </SelectItem>
                    <SelectItem key="draft" className="h-10">
                        Bài đăng nháp
                    </SelectItem>
                    <SelectItem key="trash" className="h-10">
                        Thùng rác
                    </SelectItem>
                </Select>

                <div>
                    <div>Quản lý</div>
                </div>
            </div>

            <DiaryListContent className="mt-4">
                <Card
                    shadow="md"
                    radius="sm"
                    className="w-full bg-white hover:bg-gray-100 dark:hover:bg-gray-700 dark:bg-gray-800 cursor-pointer"
                >
                    <CardBody>
                        <div className="flex justify-between">
                            <div className="flex gap-2">
                                <Image
                                    radius="sm"
                                    src="https://mediawinwin.vn/upload/images/sanpham/bao-gia-chup-mon-an-dich-vu-chup-anh-do-an-chuyen-nghiep-5.JPG"
                                    className="w-20 h-20"
                                />
                                <div className="flex flex-col gap-2 justify-center">
                                    <div className="text-lg font-bold">
                                        Bài viết 1
                                    </div>
                                    <div className="flex gap-2 items-center">
                                        <span className="text-sm text-gray-500">Đã xuất bản 13/06/2025</span>
                                        <Chip
                                            size="md"
                                            color="primary"
                                            variant="flat"
                                            className="text-xs"
                                        >
                                            Hôm nay ăn gì
                                        </Chip>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-2">
                                <div className="flex gap-2">
                                    <Avatar
                                        size="sm"
                                        src="https://www.shutterstock.com/image-vector/custom-default-profile-picture-icon-260nw-2359133587.jpg"
                                    />
                                </div>
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </DiaryListContent>
        </DiaryListWrapper>
    )
}

const DiaryListWrapper = styled.div`
`

const DiaryListContent = styled.div`
`