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
import { logout } from '../../../redux/actions/user';
import { useDispatch } from 'react-redux';
const Header = ({ isAuthenticated = false, user }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();
  const logouthandler = () => {
    console.log('logout');
    onClose();
    dispatch(logout());
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
        zIndex={'overlay'}
      >
        <RiMenuFill />
      </Button>

      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay backdropFilter={'blur(3px)'} />
        <DrawerContent>
          <DrawerHeader borderBottomWidth={'1px'}>EDUWEB</DrawerHeader>
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
              <Link to={'/contact'} onClick={onClose}>
                <Button> Contact</Button>
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
                      <Button colorScheme="yellow" onClick={onClose}>
                        Login
                      </Button>
                    </Link>
                    <p> or </p>
                    <Link to={'/register'}>
                      <Button colorScheme="yellow" onClick={onClose}>
                        Sign up
                      </Button>
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
