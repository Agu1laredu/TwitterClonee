import React from "react";
import { Icon, Skeleton, SkeletonText,  Text, Stack} from "@chakra-ui/react";
import { BsStar } from "react-icons/bs";

const  Notificaciones: React.FC = () => {
    return (
        <Stack overflow="auto" width="70%"  maxHeight="100vh">
        <Stack spacingX={4} paddingX={2}>
            <Stack  paddingX={4} alignItems="center" direction="row" justifyContent="space-between" paddingY={2} >
            <Text fontWeight="bold" fontSize="lg" marginBottom={2}>Inico</Text>
            <Stack width={10}>
            <Icon as={BsStar} color="primary.500" height={5} width={5}  />
            </Stack>
            </Stack>
            
         

        </Stack>
        <Stack paddingX={4} paddingY={12} spacing={6}>
            <Stack direction="row" spacing={4}>
                <Stack>
                    <Skeleton height={6} width="120px" />
                    <Skeleton height={3} width="80px" />
                </Stack>
            </Stack>
            <SkeletonText height={36} width="100%" noOfLines={6} />

            <Stack direction="row" spacing={4}>
                
                <Stack>
                    <Skeleton height={6} width="120px" />
                    <Skeleton height={3} width="80px" />
                </Stack>
            </Stack>
            <SkeletonText height={36} width="100%" noOfLines={6} />

            <Stack direction="row" spacing={4}>
                
                <Stack>
                    <Skeleton height={6} width="120px" />
                    <Skeleton height={3} width="80px" />
                </Stack>
            </Stack>
            <SkeletonText height={36} width="100%" noOfLines={6} />

            <Stack direction="row" spacing={4}>
                
                <Stack>
                    <Skeleton height={6} width="120px" />
                    <Skeleton height={3} width="80px" />
                </Stack>
            </Stack>
            <SkeletonText height={36} width="100%" noOfLines={6} />

            <Stack direction="row" spacing={4}>
                
                <Stack>
                    <Skeleton height={6} width="120px" />
                    <Skeleton height={3} width="80px" />
                </Stack>
            </Stack>
            <SkeletonText height={36} width="100%" noOfLines={6} />

            <Stack direction="row" spacing={4}>
                
                <Stack>
                    <Skeleton height={6} width="120px" />
                    <Skeleton height={3} width="80px" />
                </Stack>
            </Stack>
            <SkeletonText height={36} width="100%" noOfLines={6} />

            <Stack direction="row" spacing={4}>
                
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

export default Notificaciones; 