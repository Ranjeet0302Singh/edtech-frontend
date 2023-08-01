import {
  Button,
  Container,
  HStack,
  Heading,
  Image,
  Input,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const Course = ({
  views,
  title,
  imageSrc,
  id,
  addToPlaylistHandler,
  creator,
  description,
  lectureCount,
}) => {
  return (
    <VStack className="course" alignItems={['center', 'flex-start']}>
      <Image src={imageSrc} boxSize={'60'} objectFit={'contain'} />
      <Heading
        textAlign={['center', 'left']}
        maxW={'200px'}
        size={'sm'}
        fontFamily={'sans-serif'}
        noOfLines={3}
        children={title}
      />
      <Text noOfLines={2} children={description} />
      <HStack>
        <Text
          noOfLines={2}
          fontWeight="bold"
          textTransform={'uppercase'}
          children={'creator'}
        />
        <Text
          noOfLines={2}
          fontFamily="body"
          textTransform={'uppercase'}
          children={creator}
        />
      </HStack>

      <Heading
        textAlign={'center'}
        size={'xs'}
        children={`Lectures - ${lectureCount}`}
        textTransform="uppercase"
      />
      <Heading
        size={'xs'}
        children={`Views - ${views}`}
        textTransform="uppercase"
      />

      <Stack direction={['column', 'row']} alignItems={'center'}>
        <Link to={`/course/${id}`}>
          <Button colorScheme="yellow"> Watch Now</Button>
        </Link>
        <Button
          colorScheme="yellow"
          variant={'ghost'}
          onClick={() => addToPlaylistHandler(id)}
        >
          {' '}
          Add To playlist
        </Button>
      </Stack>
    </VStack>
  );
};
const Courses = () => {
  const [keyword, setKeyword] = useState('');
  // const [category, setCategory] = useState('');
  const addToPlaylistHandler = () => {
    console.log('Added to playlist');
  };
  const categories = [
    'Web Development',
    'Artificial Intelligence',
    'DSA',
    'App Development',
    'Data Science',
    'Game Development',
  ];
  return (
    <Container minH={'95vh'} maxW={'container.lg'} paddingY={'8'}>
      <Heading children="All Courses" m={'8'} />
      <Input
        value={keyword}
        onChange={e => setKeyword(e.target.value)}
        placeholder="Search a course..."
        type="text"
      />

      <HStack overflowY={'auto'} paddingY="8">
        {categories.map((item, index) => (
          <Button minW={'60'} key={index}>
            {/* onClick={() => setCategory(item)} */}
            <Text children={item} />
          </Button>
        ))}
      </HStack>

      <Stack
        direction={['column', 'row']}
        flexWrap={'wrap'}
        justifyContent={['flex-start', 'space-evenly']}
        alignItems={['center', 'flex-start']}
      >
        <Course
          title={'Sample1'}
          description={'Sample1'}
          views={23}
          imageSrc={
            'https://cdn.pixabay.com/photo/2016/08/11/23/48/mountains-1587287_1280.jpg'
          }
          id={'Sample1'}
          creator={'Sample1 Boy'}
          lectureCount={2}
          addToPlaylistHandler={addToPlaylistHandler}
        />
      </Stack>
    </Container>
  );
};

export default Courses;
