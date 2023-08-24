import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateProfile } from '../../redux/actions/profile';
import { useEffect } from 'react';
import { toast } from 'react-hot-toast';

const UpdatePassword = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const dispatch = useDispatch();
  const submitHandler = e => {
    dispatch(updateProfile(name, email));
  };
  const {loading,message,error} = useSelector(state => state.profile);

  useEffect(()=>{
    if(error){
      toast.error(error);
      dispatch({type:'clearError'})
    }
    
    if(message){
      toast.success(message);
      dispatch({type:'clearMessage'})
    }

  }, [dispatch,error,message])

  return (
    <Container py={'16'} minH={'90vh'}>
      <form onSubmit={submitHandler}>
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
            type="text"
            focusBorderColor="yellow.500"
          />
          <Input
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Email"
            type="email"
            focusBorderColor="yellow.500"
          />
          <Button isLoading={loading} w={'full'} colorScheme="yellow" type="submit">
            Update
          </Button>
        </VStack>
      </form>
    </Container>
  );
};

export default UpdatePassword;
