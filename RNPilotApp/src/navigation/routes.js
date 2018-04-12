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

import { ProfileButton } from '../components/ProfileButton';

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
      headerRight: <ProfileButton />,
    },
  },
  ToDos: {
    screen: ToDos,
    navigationOptions: {
      headerTitle: 'To Dos',
      headerBackTitle: ' ',
      headerRight: <ProfileButton />,
    },
  },
  Albums: {
    screen: Albums,
    navigationOptions: {
      headerTitle: 'Álbuns',
      headerBackTitle: ' ',
      headerRight: <ProfileButton />,
    },
  },
  AlbumPhotos: {
    screen: AlbumPhotos,
    navigationOptions: {
      headerTitle: 'Fotos',
      headerBackTitle: ' ',
      headerRight: <ProfileButton />,
    },
  },
  Posts: {
    screen: Posts,
    navigationOptions: {
      headerTitle: 'Posts',
      headerBackTitle: ' ',
      headerRight: <ProfileButton />,
    },
  },
  PostDetail: {
    screen: PostDetail,
    navigationOptions: {
      headerTitle: 'Comentários',
      headerBackTitle: ' ',
      headerRight: <ProfileButton />,
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
