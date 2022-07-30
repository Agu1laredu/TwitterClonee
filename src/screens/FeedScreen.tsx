import React from "react";
import { FaUserAlt } from "react-icons/fa";
import {Icon,Text} from "@chakra-ui/react"; 

const  FeedScreen: React.FC = () => {
    return (
        <div>
         <Text fontWeight="700" fontSize="lg" marginBottom={5}>Inico</Text>
          <Icon as={FaUserAlt} width={6} height={6}></Icon>

        </div>
    );
}

export default FeedScreen; 