import React from "react";
import { Container, Stack, Icon, Text, Box ,Button} from "@chakra-ui/react";
import { FaTwitter,FaHome,FaHashtag, FaBell ,FaEnvelope, FaBookmark, FaList, FaUser, FaEllipsisH } from "react-icons/fa";
import { Link } from "react-router-dom";

interface propsWithChildren {
   children: React.ReactNode
}

const Componente = ({ children }: propsWithChildren): JSX.Element => {
   return (
      <><Container height="100%" paddingX={0} maxWidth="container.md" alignSelf="center">
         <Stack direction="row" height="100%" >
            <Stack paddingLrft={4} paddingRight={12} spacing={8} borderRightWidth={1} borderRightColor="gray.700">
               <Link to={"/"}>
                  <Icon width={6} height={6} as={FaTwitter}></Icon>
               </Link>
               <Stack spacing={6}>
                  <Link to={"/"}>
                     <Stack direction="row" alignItems="center" spacing={6}>
                        <Icon as={FaHome} width={6} height={6}></Icon>
                        <Text fontWeight="500" fontSize="lg">Inicio</Text>
                     </Stack>
                  </Link>
                  <Link to={"Message"}>
                     <Stack direction="row" alignItems="center" spacing={6}>
                        <Icon as={FaHashtag} width={6} height={6}></Icon>
                        <Text fontWeight="500" fontSize="lg">Explorar</Text>
                     </Stack>
                  </Link>
                  <Stack direction="row" alignItems="center" spacing={6}>
                     <Icon as={FaBell} width={6} height={6}></Icon>
                     <Text fontWeight="500" fontSize="lg">Comunidades</Text>
                  </Stack>
                  <Stack direction="row" alignItems="center" spacing={6}>
                     <Icon as={FaEnvelope} width={6} height={6}></Icon>
                     <Text fontWeight="500" fontSize="lg">Notificaciones</Text>
                  </Stack>
                  <Stack direction="row" alignItems="center" spacing={6}>
                     <Icon as={FaBookmark} width={6} height={6}></Icon>
                     <Text fontWeight="500" fontSize="lg">Mensajes</Text>
                  </Stack>
                  <Stack direction="row" alignItems="center" spacing={6}>
                     <Icon as={FaList} width={6} height={6}></Icon>
                     <Text fontWeight="500" fontSize="lg">Guardados</Text>
                  </Stack>
                  <Stack direction="row" alignItems="center" spacing={6}>
                     <Icon as={FaUser} width={6} height={6}></Icon>
                     <Text fontWeight="500" fontSize="lg">Perfil</Text>
                  </Stack>
                  <Stack direction="row" alignItems="center" spacing={6}>
                     <Icon as={FaEllipsisH} width={6} height={6}></Icon>
                     <Text fontWeight="500" fontSize="lg">Más Opciones</Text>
                  </Stack>
               </Stack>
               <Button size="lg" colorScheme="primary">Twittear</Button>
            </Stack>
            <Box padding={4}>
               {children}
            </Box>
         </Stack>
      </Container>
      </>
   );
};

export default Componente