import { Container, Heading, Button, Input, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ForgetPassword = () => {
  const [email, setEmail] = useState('');
  return (
    <Container py={'16'} h={'89.4vh'}>
      <form>
        <Heading
          children="Forget Password"
          my={'16'}
          textTransform={'uppercase'}
          alignItems={['center', 'left']}
        />
        <VStack spacing={'8'}>
          <Input
            required
            id="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="xyz@gmail.com"
            type="email"
            focusBorderColor="yello.500"
          />
          <Link to={`/resetpassword/${email}`}>
            <Button type="submit" w={'full'} colorScheme="yellow">
              {' '}
              Send reset link
            </Button>
          </Link>
        </VStack>
      </form>
    </Container>
  );
};

export default ForgetPassword;
