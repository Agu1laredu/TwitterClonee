import React from 'react';
import { Container, Stack, Icon, Text, Box ,Button, useColorMode ,useColorModeValue, Image} from '@chakra-ui/react';
import { FaTwitter,FaHome,FaHashtag ,FaEnvelope, FaBookmark, FaUser, FaEllipsisH, FaBell } from 'react-icons/fa';
import { ImUsers } from 'react-icons/im';

import { Link } from 'react-router-dom';

interface propsWithChildren {
   children: React.ReactNode
}



const Componente = ({ children }: propsWithChildren): JSX.Element => {
   const {toggleColorMode} = useColorMode();
   const logoColor = useColorModeValue('primary.500' , undefined)
   return (
      <><Container  height='100%' paddingX={0} maxWidth='container.lg' alignSelf='center'>
         <Stack direction='row' height='100%' spacing={10}>

           <Stack justifyContent='space-between' >

           <Stack paddingLeft={4} paddingRight={12} spacing={10} borderRightWidth={1} borderRightColor='gray.700'>
              <Stack marginTop={4}>
              <Link to='/'>
                  <Icon color={logoColor} width={8} height={8} as={FaTwitter} onClick={toggleColorMode}/>
               </Link>
              </Stack>
               <Stack spacing={6}>
                  <Link to='/'>
                     <Stack direction='row' alignItems='center' spacing={6}>
                        <Icon as={FaHome} width={6} height={6}></Icon>
                        <Text fontWeight='500' fontSize='lg'>Inicio</Text>
                     </Stack>
                  </Link>
                  <Link to='Explorar'>
                     <Stack direction='row' alignItems='center' spacing={6}>
                        <Icon as={FaHashtag} width={6} height={6}></Icon>
                        <Text fontWeight='500' fontSize='lg'>Explorar</Text>
                     </Stack>
                  </Link>
                 <Link to='Comunidades'>
                 <Stack direction='row' alignItems='center' spacing={6}>
                     <Icon as={ImUsers} width={6} height={6}></Icon>
                     <Text fontWeight='500' fontSize='lg'>Comunidades</Text>
                  </Stack>
                 </Link>
                  <Link to='/Notificaciones'>
                  <Stack direction='row' alignItems='center' spacing={6}>
                     <Icon as={FaBell} width={6} height={6}></Icon>
                     <Text fontWeight='500' fontSize='lg'>Notificaciones</Text>
                  </Stack>
                  </Link>
                 <Link to='/message'>
                 <Stack direction='row' alignItems='center' spacing={6}>
                     <Icon as={FaEnvelope} width={6} height={6}></Icon>
                     <Text fontWeight='500' fontSize='lg'>Mensajes</Text>
                  </Stack>
                 </Link>
                  <Link to='/Guardados'>
                  <Stack direction='row' alignItems='center' spacing={6}>
                     <Icon as={FaBookmark} width={6} height={6}></Icon>
                     <Text fontWeight='500' fontSize='lg'>Guardados</Text>
                  </Stack>
                  </Link>
                 <Link to='/Perfil'>
                 <Stack direction='row' alignItems='center' spacing={6}>
                     <Icon as={FaUser} width={6} height={6}></Icon>
                     <Text fontWeight='500' fontSize='lg'>Perfil</Text>
                  </Stack>
                 </Link>
                  <Link to='/Opciones'>
                  <Stack direction='row' alignItems='center' spacing={6}>
                     <Icon as={FaEllipsisH} width={6} height={6}></Icon>
                     <Text fontWeight='500' fontSize='lg'>Más Opciones</Text>
                  </Stack>
                  </Link>
               </Stack>
               <Button size='lg' colorScheme='primary'>Twittear</Button>
            </Stack>
            <Stack paddingX={6} paddingY={6}  direction='row' alignItems='center' justifyContent='space-between'>
               <Stack direction='row' alignItems='center'>
               <Image borderRadius='50%' height={12} width={12} src='https://tse2.mm.bing.net/th?id=OIP.MRFSIVBGZ6xa6cCsNKWHvwHaFY&pid=Api' />
                  <Stack spacing={0}>
                     <Text fontWeight='bold'fontSize='sm' >EDD</Text>
                     <Text fontSize='sm' color='gray.500'>@Agu1larjesus</Text>
                  </Stack>
               </Stack>
               <Stack  padding={5}>
               <Icon marginBottom={4} as={FaEllipsisH}/>
               </Stack>
            </Stack>

           </Stack>
            <Box padding={4} width='100%'>
               {children}
            </Box>
         </Stack>
      </Container>
      </>
   );
};

export default Componente
