import { Button, Center, Divider, Flex, Heading, HStack, Spacer } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';

function index() {
  return (
    <>
      <Flex p="0.7rem 4rem" bg="#f7f7f7" fontWeight="bold">
        <Center>
          <Heading s="h1" color="#545454" size="lg" isTruncated>
            <Link href="/">GehDev</Link>
          </Heading>
        </Center>
        <Spacer />
        <HStack spacing="24px">
          <Link href="#">
            <a>
              <Button colorScheme="black" variant="link">
                Sobre
              </Button>
            </a>
          </Link>
          <Link className="lk" href="#">
            <a>
              <Button colorScheme="black" variant="link">
                Projetos
              </Button>
            </a>
          </Link>
          <Link className="lk" href="#">
            <a>
              <Button colorScheme="black" variant="link">
                Contato
              </Button>
            </a>
          </Link>
        </HStack>
      </Flex>
      <Divider variant="solid" />
    </>
  );
}

export default index;
