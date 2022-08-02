import React from "react";
import { Image,Icon, Skeleton, SkeletonText, SkeletonCircle, Text, Stack,Button, StackDivider,Textarea } from "@chakra-ui/react";
import { BsStar } from "react-icons/bs";

const FeedScreen: React.FC = () => {
    return (

        <Stack overflow="auto" width="70%"  maxHeight="100vh">
            <Stack spacingX={4} paddingX={2}>
                <Stack  paddingX={4} alignItems="center" direction="row" justifyContent="space-between" paddingY={2} >
                <Text fontWeight="bold" fontSize="lg" marginBottom={2}>Inico</Text>
                <Stack width={10}>
                <Icon as={BsStar} color="primary.500" height={5} width={5}  />
                </Stack>
                </Stack>
                
                <Stack spacing={4} direction="row" paddingY={2} width="100%" paddingX={1}  justifyContent="center">
                    <Image borderRadius="50%"  height={12} width={12} src="https://tse2.mm.bing.net/th?id=OIP.MRFSIVBGZ6xa6cCsNKWHvwHaFY&pid=Api" />
                   <Stack divider={<StackDivider/>} width="100%">
                    <Textarea/>
                    <Stack direction="row"  justifyContent="space-between">
                        <Stack direction="row">
                            <Icon as={BsStar}/>
                            <Icon as={BsStar}/>
                            <Icon as={BsStar}/>
                            <Icon as={BsStar}/>
                            <Icon as={BsStar}/>
                        </Stack>
                        <Button colorScheme="primary">Twittear</Button>
                    </Stack>

                   </Stack>
                </Stack>

            </Stack>
            <Stack paddingX={4} paddingY={12} spacing={6}>
                <Stack direction="row" spacing={4}>
                    <SkeletonCircle height={12} width={12} />
                    <Stack>
                        <Skeleton height={6} width="120px" />
                        <Skeleton height={3} width="80px" />
                    </Stack>
                </Stack>
                <SkeletonText height={36} width="100%" noOfLines={6} />

                <Stack direction="row" spacing={4}>
                    <SkeletonCircle height={12} width={12} />
                    <Stack>
                        <Skeleton height={6} width="120px" />
                        <Skeleton height={3} width="80px" />
                    </Stack>
                </Stack>
                <SkeletonText height={36} width="100%" noOfLines={6} />

                <Stack direction="row" spacing={4}>
                    <SkeletonCircle height={12} width={12} />
                    <Stack>
                        <Skeleton height={6} width="120px" />
                        <Skeleton height={3} width="80px" />
                    </Stack>
                </Stack>
                <SkeletonText height={36} width="100%" noOfLines={6} />

                <Stack direction="row" spacing={4}>
                    <SkeletonCircle height={12} width={12} />
                    <Stack>
                        <Skeleton height={6} width="120px" />
                        <Skeleton height={3} width="80px" />
                    </Stack>
                </Stack>
                <SkeletonText height={36} width="100%" noOfLines={6} />

                <Stack direction="row" spacing={4}>
                    <SkeletonCircle height={12} width={12} />
                    <Stack>
                        <Skeleton height={6} width="120px" />
                        <Skeleton height={3} width="80px" />
                    </Stack>
                </Stack>
                <SkeletonText height={36} width="100%" noOfLines={6} />

                <Stack direction="row" spacing={4}>
                    <SkeletonCircle height={12} width={12} />
                    <Stack>
                        <Skeleton height={6} width="120px" />
                        <Skeleton height={3} width="80px" />
                    </Stack>
                </Stack>
                <SkeletonText height={36} width="100%" noOfLines={6} />

                <Stack direction="row" spacing={4}>
                    <SkeletonCircle height={12} width={12} />
                    <Stack>
                        <Skeleton height={6} width="120px" />
                        <Skeleton height={3} width="80px" />
                    </Stack>
                </Stack>
                <SkeletonText height={36} width="100%" noOfLines={6} />


            </Stack>

        </Stack>

    );
}

export default FeedScreen; 