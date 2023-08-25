import { Container, Heading, Button, Input, VStack } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { forgetPassword } from '../../redux/actions/profile';
import { toast } from 'react-hot-toast';

const ForgetPassword = () => {
  const [email, setEmail] = useState('');

  const {loading,message,error} = useSelector(state=>state.profile)

  const dispatch = useDispatch();
  const submitHandler = e =>{
    e.preventDefault();
    dispatch(forgetPassword(email))
  }
  useEffect(()=>{
    if(error){
      toast.error(error);
      dispatch({type:'clearError'})
    }
    if(message){
      toast.success(message);
      dispatch({type:'clearMessage'})
    }
  },[dispatch,error,message])

  return (
    <Container py={'16'} h={'89.4vh'}>
      <form onSubmit={submitHandler}> 
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
          {/* <Link to={`/resetpassword/${email}`}>
          </Link> */}
            <Button type="submit" w={'full'} colorScheme="yellow" isLoading={loading}>
              {' '}
              Send reset link
            </Button>
        </VStack>
      </form>
    </Container>
  );
};

export default ForgetPassword;
