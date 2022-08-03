import React from 'react';
import { Image, Icon, Divider, Skeleton, SkeletonText, SkeletonCircle, Text, Stack, Button, StackDivider, Textarea } from '@chakra-ui/react';
import { BsImage, BsStar } from 'react-icons/bs';
import { AiOutlineGif, AiOutlineSmile, AiOutlineCalendar } from 'react-icons/ai';
import { RiBarChartHorizontalLine } from 'react-icons/ri';




const FeedScreen: React.FC = () => {
    const [count, setCount] = React.useState<number>(1);
    const tweets = React.useMemo(() => new Array(count).fill(true).map((_, index) => index), [count]);
    return (

        <Stack overflow='auto' width='70%' maxHeight='90vh'>
            <Stack >
                <Stack divider={<StackDivider />} spacing={4} paddingX={2}>
                    <Stack paddingX={4} alignItems='center' direction='row' justifyContent='space-between' paddingY={2} >
                        <Text fontWeight='bold' fontSize='lg' marginBottom={2}>Inico</Text>
                        <Stack width={10}>
                            <Icon as={BsStar} color='primary.500' height={5} width={5} />
                        </Stack>
                    </Stack>

                    <Stack spacing={4} direction='row' paddingY={2} width='100%' paddingX={1} justifyContent='center'>
                        <Image borderRadius='50%' height={12} width={12} src='https://tse2.mm.bing.net/th?id=OIP.MRFSIVBGZ6xa6cCsNKWHvwHaFY&pid=Api' />
                        <Stack divider={<StackDivider />} width='100%'>
                            <Textarea fontSize='xl' fontWeight='500' variant='unstyled' />
                            <Stack alignItems='center' direction='row' justifyContent='space-between'>
                                <Stack direction='row'>
                                    <Icon as={BsImage} height={6} width={6} />
                                    <Icon as={AiOutlineGif} height={6} width={6} />
                                    <Icon as={RiBarChartHorizontalLine} height={6} width={6} />
                                    <Icon as={AiOutlineSmile} height={6} width={6} />
                                    <Icon as={AiOutlineCalendar} height={6} width={6} />
                                </Stack>
                                <Button onClick={() => setCount((count) => count + 1)} colorScheme='primary'>Twittear</Button>
                            </Stack>

                        </Stack>
                    </Stack>
                </Stack>
                <Divider />
                <Stack divider={<StackDivider />}
                    flex={1}
                    maxHeight='90vh'
                    overflowY='auto'
                    spacing={0}
                    sx={{
                        '&:: -webkit-scrollbar': {
                            display: 'none',
                        },
                    }}>
                    {tweets.map((index) => (
                        <Stack onClick={() => setCount(count => count - 1)}
                            key={index} direction='row' maxWidth={480} padding={4} spacing={4} width='100%'>
                            <SkeletonCircle height={12} minHeight={12} minWidth={12} width={12} />
                            <Stack spacing={2} width='100%'>
                                <Stack alignItems='flex-end' direction='row' spacing={1}>
                                    <Skeleton height={6} width='120px' />
                                    <Skeleton height={3} width='80px' />
                                </Stack>
                                <SkeletonText height='100%' noOfLines={6} spacing={4} />
                            </Stack>
                        </Stack>
                    )
                    )}
                </Stack>

            </Stack>

        </Stack>
    );
}

export default FeedScreen; 