import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';

const UpdatePassword = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  return (
    <Container py={'16'} minH={'90vh'}>
      <form>
        <Heading
          children="Update Profile"
          textTransform={'uppercase'}
          my={'16'}
          textAlign={['center', 'left']}
        />
        <VStack spacing={'8'}>
          <Input
            required
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Name"
            type='text'
            focusBorderColor="yellow.500"
          />
          <Input
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Email"
            type='email'
            focusBorderColor="yellow.500"
          />
          <Button w={'full'} colorScheme='yellow' type='submit'>
            Update
          </Button>
        </VStack>
      </form>
    </Container>
  );
};

export default UpdatePassword;
