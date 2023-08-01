import React from 'react';
import { ColorModeSwitcher } from '../../../ColorModeSwitcher';
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  VStack,
  useDisclosure,
} from '@chakra-ui/react';
import { RiDashboardFill, RiLogoutBoxLine, RiMenuFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isAuthenticated = true;
  const user = {
    role: 'admin',
  };
  const logouthandler = () => {
    console.log('logout');
    onClose();
  };
  return (
    <div>
      <ColorModeSwitcher />
      <Button
        onClick={onOpen}
        colorScheme="yellow"
        width={'12'}
        height={'12'}
        rounded={'full'}
        position={'fixed'}
        top={'6'}
        left={'6'}
      >
        <RiMenuFill />
      </Button>

      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay backdropFilter={'blur(3px)'} />
        <DrawerContent>
          <DrawerHeader borderBottomWidth={'1px'}>EdTech</DrawerHeader>
          <DrawerBody>
            <VStack spacing={'4'} alignItems={'flex-start'}>
              <Link to={'/'} onClick={onClose}>
                <Button> Home</Button>
              </Link>
              <Link to={'/courses'} onClick={onClose}>
                <Button> Browse All Courses</Button>
              </Link>
              <Link to={'/request'} onClick={onClose}>
                <Button> Request a Course</Button>
              </Link>
              <Link to={'/contect'} onClick={onClose}>
                <Button> Contect</Button>
              </Link>
              <Link to={'/about'} onClick={onClose}>
                <Button> About</Button>
              </Link>

              <HStack
                justifyContent={'space-evenly'}
                position={'absolute'}
                bottom={'2rem'}
                width={'80%'}
              >
                {isAuthenticated ? (
                  <>
                    <VStack>
                      <HStack>
                        <Link to={'/profile'} onClick={onClose}>
                          <Button colorScheme="yellow">Profile</Button>
                        </Link>
                        <Button variant={'ghost'} onClick={logouthandler}>
                          <RiLogoutBoxLine />
                          LogOut
                        </Button>
                      </HStack>
                      {user && user.role === 'admin' && (
                        <Link to={'/admin/dashboard'} onClick={onClose}>
                          <Button colorScheme="purple" varient="ghost">
                            <RiDashboardFill style={{ margin: '4px' }} />
                            DashBoard
                          </Button>
                        </Link>
                      )}
                    </VStack>
                  </>
                ) : (
                  <>
                    <Link to={'/login'}>
                      <Button colorScheme="yellow">Login</Button>
                    </Link>
                    <p> or </p>
                    <Link to={'/signup'}>
                      <Button colorScheme="yellow">Sign up</Button>
                    </Link>
                  </>
                )}
              </HStack>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default Header;
