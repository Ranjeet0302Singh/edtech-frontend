import { Container, Heading, Button, Input, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';

const ResetPassword = () => {
  const [password, setPassword] = useState('');
  return (
    <Container py={'16'} h={'89.4vh'}>
      <form>
        <Heading
          children="Reset Password"
          my={'16'}
          textTransform={'uppercase'}
          alignItems={['center', 'left']}
        />
        <VStack spacing={'8'}>
          <Input
            required
            id="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="password"
            type="password"
            focusBorderColor="yello.500"
          />
          <Button type="submit" w={'full'} colorScheme="yellow">
            {' '}
           Reset Password
          </Button>
        </VStack>
      </form>
    </Container>
  );
};

export default ResetPassword;
