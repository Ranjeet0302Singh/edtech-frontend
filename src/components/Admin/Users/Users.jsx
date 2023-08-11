import {
  Box,
  Button,
  Grid,
  HStack,
  Heading,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import React from 'react';
import cursor from '../../../assets/images/cursor.png';
import Sidebar from '../Sidebar';
import { RiDeleteBin7Fill } from 'react-icons/ri';

const Users = () => {
  const updateHandler=(userId)=>{
console.log(userId);
  }
  const deleteButtonHandler=(userId)=>{
console.log(userId);
  }
  const users = [{
    _id:"23456789",
    name:'Ranjeet',
    role:'admin',
    subscription:{
      status:'active',
    },
    email:'ranjeet@gmail.com'
  }];

  return (
    <Grid
      css={{
        cursor: `url(${cursor}),default`,
      }}
      minH={'100vh'}
      templateColumns={['1f', ' 5fr 1fr']}
    >
      <Box p={['0', '16']} overflow={'auto'}>
        <Heading
          textTransform={'uppercase'}
          children="All Users"
          my={'16'}
          textAlign={['center', 'left']}
        />
        <TableContainer w={['100w', 'full']}>
          <Table variant={'simple'} size={'lg'}>
            <TableCaption>All available users in the database</TableCaption>
            <Thead>
              <Tr>
                <Th>Id</Th>
                <Th>Name</Th>
                <Th>Email</Th>
                <Th>Role</Th>
                <Th>Subscribtion</Th>
                <Th isNumeric>Action</Th>
              </Tr>
            </Thead>
            <Tbody>
              {users.map(item => (
                <Row key={item._id} item={item} updateHandler={updateHandler} deleteButtonHandler={deleteButtonHandler}/>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
      <Sidebar />
    </Grid>
  );
};

export default Users;
function Row({ item, updateHandler,deleteButtonHandler }) {
  return (
    <Tr>
      <Td>#  {item._id}</Td>
      <Td>{item.name}</Td>
      <Td>{item.email}</Td>
      <Td>{item.role}</Td>
      <Td>
        {item.subscription.status === 'active' ? 'Active' : 'Not Active'}
      </Td>
      <Td isNumeric>
        <HStack justifyContent={'flex-end'}>
          <Button
          onClick={()=>updateHandler(item._id)}
          variant={'outline'} color={'purple.500'}>
            Change Role
          </Button>
          <Button
          onClick={()=>deleteButtonHandler(item._id)}
          color={'purple.600'}>
            <RiDeleteBin7Fill />
          </Button>
        </HStack>
      </Td>
    </Tr>
  );
}
