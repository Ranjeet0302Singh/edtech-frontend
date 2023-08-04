import {
  Avatar,
  Button,
  Container,
  Heading,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <Container maxW={'container.lg'} padding={'16'} boxShadow={'lg'} h={'90vh'} justifyContent={'space-between'} alignItems={'center'}>
      <Heading children={'About Us'} textAlign={['center', 'left']} />

      <Stack direction={['column', 'row']} spacing={['4', '16']} padding={'8'}>
        <VStack>
          <Avatar
            boxSize={['40', '48']}
            src="https://avatars.githubusercontent.com/u/93567891?v=4"
          />
          <Text children={'Founder'} opacity={'0.7'} />
        </VStack>

        <VStack justifyContent={'center'} alignItems={['center', 'flex-start']}>
          <Heading children="Ranjeet Singh" size={['md', 'xl']} />
          <Text children={'Hi,I am a full-stack developer and a teacher'} />
        </VStack>
      </Stack>

      <Stack m='8' direction={['column','row']} alignItems={'center'}>
        <Text fontFamily={'cursive'} m={'8'} textAlign={['center','left']}> We are a video streaming platform with some premium courses available only for premium users</Text>

        <Link to={'/subscribe'}>
            <Button variant={'ghost'} colorScheme='yellow'>CheckOut</Button>
        </Link>

      </Stack>
    </Container>
  );
};

export default About;
