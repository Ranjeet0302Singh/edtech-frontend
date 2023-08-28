import { Container, Heading, Button, Input, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetPassword } from '../../redux/actions/profile';
import { useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';

const ResetPassword = () => {
  const [password, setPassword] = useState('');
  const params = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const {loading,message,error} = useSelector(state=>state.profile)
  const submitHandler = e =>{
    e.preventDefault();
    dispatch(resetPassword(params.token,password))
  }
  useEffect(()=>{
    if(error){
      toast.error(error);
      dispatch({type:'clearError'})
    }
    if(message){
      toast.success(message);
      dispatch({type:'clearMessage'})
      navigate('/login')
    }
  },[dispatch,error,message,navigate])
  return (
    <Container py={'16'} h={'89.4vh'}>
      <form onSubmit={submitHandler}>
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
          <Button type="submit" w={'full'} colorScheme="yellow" isLoading={loading}>
            {' '}
           Reset Password
          </Button>
        </VStack>
      </form>
    </Container>
  );
};

export default ResetPassword;
