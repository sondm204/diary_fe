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
        </ViewContentWrapper>
    )
}

const ViewContentWrapper = styled.div`
    height: 100%;
`;

const ViewContentHeader = styled.div``
