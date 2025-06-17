import { Button, Card, CardBody, CardFooter, CardHeader, Divider, Image } from "@heroui/react";
import { FaRegComment, FaRegHeart } from "react-icons/fa";
import { RiShareForwardLine } from "react-icons/ri";

import styled from "styled-components";

export const ViewContent = () => {
    return (
        <ViewContentWrapper className="col-span-9 h-full p-8 dark:bg-gray-800 bg-white">
            <ViewContentHeader className="flex flex-col gap-2 justify-center items-center">
                <h1 className="text-3xl font-bold">Nhật ký bản thân</h1>
                <p className="text-gray-500 text-center px-20">
                    Chào mừng đến với nhật ký cá nhân của tôi. Tại đây tôi chia sẻ những suy nghĩ, kinh nghiệm và suy ngẫm của mình về hành trình cuộc sống.
                </p>
            </ViewContentHeader>
            <ViewContentBody className="flex flex-col gap-4 mt-4">
                <Card
                    shadow="lg"
                    className="w-full hover:translate-y-[-5px] hover:shadow-2xl !transition-all duration-300 cursor-pointer dark:bg-gray-900 bg-white"
                >
                    <CardHeader className="w-full h-64 p-0 justify-center overflow-hidden">
                        <Image
                            src="https://media.istockphoto.com/id/1457889029/photo/group-of-food-with-high-content-of-dietary-fiber-arranged-side-by-side.jpg?s=612x612&w=0&k=20&c=SEyObHsbBsrd1XZlgEg389VT86BMFKZKfKReKyVPAk4="
                            alt="food"
                            width={5000}
                        />
                    </CardHeader>
                    <CardBody>
                        <p className="text-gray-500">
                            Đây là bài viết 1.
                        </p>
                    </CardBody>
                    <Divider />
                    <CardFooter className="flex justify-evenly items-center">
                        <Button startContent={<FaRegHeart />}>
                            Like
                        </Button>
                        <Button startContent={<FaRegComment />}>
                            Bình luận
                        </Button>
                        <Button startContent={<RiShareForwardLine />}>
                            Chia sẻ
                        </Button>
                    </CardFooter>
                </Card>
            </ViewContentBody>
        </ViewContentWrapper>
    )
}

const ViewContentWrapper = styled.div`
    height: 100%;
`;

const ViewContentHeader = styled.div``

const ViewContentBody = styled.div``