import { Box, Grid, Heading, Text, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';
import introVideo from '../../assets/videos/intro.mp4';

const CoursePage = () => {
  const [lectureNumber, setlectureNumber] = useState(0);
  const lectures = [
    {
      _id: 'ranjeet1',
      title: 'Ranjeet1',
      description: 'Ranjeet Singh Rawat1',
      video: {
        url: 'kjsdhfkjshdfkh',
      },
    },
    {
      _id: 'ranjeet2',
      title: 'Ranjeet2',
      description: 'Ranjeet Singh Rawat2',
      video: {
        url: 'kjsdhfkjshdfkh',
      },
    },
    {
      _id: 'ranjeet3',
      title: 'Ranjeet3',
      description: 'Ranjeet Singh Rawat3',
      video: {
        url: 'kjsdhfkjshdfkh',
      },
    },
  ];
  return (
    <Grid minH={'90vh'} templateColumns={['1fr', '3fr 1fr']} mt={'15'} mr={'10'} ml={'10'}>
      <Box >
        <video
          //  autoPlay
          width={'100%'}
          controls
          controlsList="nodownload noremoteplayback"
          disablePictureInPicture
          disableRemotePlayback

          src={introVideo}
        ></video>
        <Heading
          children={`#${lectureNumber + 1} ${lectures[lectureNumber].title}`}
          m={'4'}
        />
        <Heading children="Description" m={'4'} />
        <Text m={'4'} children={`${lectures[lectureNumber].description}`} />
      </Box>

      <VStack>
        {lectures.map((item, index) => (
          <button
            key={item._id}
            style={{
              width: '100%',
              padding: '1rem',
              textAlign: 'center',
              margin: 0,
              borderBottom: '1px solid rgba(0,0,0,0.2)',
            }}
            onClick={() => setlectureNumber(index)}
          >
            <Text noOfLines={1}>
              #{index + 1} {item.title}{' '}
            </Text>
          </button>
        ))}
      </VStack>
    </Grid>
  );
};

export default CoursePage;
