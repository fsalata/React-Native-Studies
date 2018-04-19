import { SwitchNavigator, StackNavigator } from 'react-navigation';
import React from 'react';

import Login from '../screens/Login';
import Register from '../screens/Register';
import Employees from '../screens/Employees';
import ToDos from '../screens/ToDos';
import Albums from '../screens/Albums';
import Posts from '../screens/Posts';
import PostDetail from '../screens/PostDetail';
import AlbumPhotos from '../screens/AlbumPhotos';
import UserProfile from '../screens/UserProfile';

// import { ProfileButton } from '../components/ProfileButton';
import { RightNavbarButtons } from '../components/RightNavbarButtons';

const LoginStack = StackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      headerTitle: 'Login',
      headerBackTitle: ' ',
    },
  },
  Register: {
    screen: Register,
    navigationOptions: {
      headerTitle: 'Cadastro',
      headerBackTitle: ' ',
    },
  },
});

const EmployeesStack = StackNavigator({
  Employees: {
    screen: Employees,
    navigationOptions: {
      headerTitle: 'Funcionários',
      headerBackTitle: ' ',
      headerRight: <RightNavbarButtons />,
      headerStyle: {
        borderBottomColor: 'transparent',
        borderBottomWidth: 0,
      },
    },
  },
  ToDos: {
    screen: ToDos,
    navigationOptions: {
      headerTitle: 'To Dos',
      headerBackTitle: ' ',
      headerRight: <RightNavbarButtons />,
      headerStyle: {
        borderBottomColor: 'transparent',
        borderBottomWidth: 0,
      },
    },
  },
  Albums: {
    screen: Albums,
    navigationOptions: {
      headerTitle: 'Álbuns',
      headerBackTitle: ' ',
      headerRight: <RightNavbarButtons showSearchButton={false} />,
    },
  },
  AlbumPhotos: {
    screen: AlbumPhotos,
    navigationOptions: {
      headerTitle: 'Fotos',
      headerBackTitle: ' ',
      headerRight: <RightNavbarButtons showSearchButton={false} />,
    },
  },
  Posts: {
    screen: Posts,
    navigationOptions: {
      headerTitle: 'Posts',
      headerBackTitle: ' ',
      headerRight: <RightNavbarButtons />,
      headerStyle: {
        borderBottomColor: 'transparent',
        borderBottomWidth: 0,
      },
    },
  },
  PostDetail: {
    screen: PostDetail,
    navigationOptions: {
      headerTitle: 'Comentários',
      headerBackTitle: ' ',
      headerRight: <RightNavbarButtons />,
      headerStyle: {
        borderBottomColor: 'transparent',
        borderBottomWidth: 0,
      },
    },
  },
  UserProfile: {
    screen: UserProfile,
    navigationOptions: {
      headerTitle: 'Perfil',
      headerBackTitle: ' ',
    },
  },
});

export default SwitchNavigator(
  {
    Login: LoginStack,
    Employees: EmployeesStack,
  },
  {
    initialRouteName: 'Login',
  },
);
