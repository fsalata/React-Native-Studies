import { SwitchNavigator, StackNavigator } from 'react-navigation';

import Login from '../screens/Login';
import Register from '../screens/Register';
import Employees from '../screens/Employees';
import ToDos from '../screens/ToDos';
import Albums from '../screens/Albums';
import Posts from '../screens/Posts';
import PostDetail from '../screens/PostDetail';
import AlbumPhotos from '../screens/AlbumPhotos';

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
    },
  },
  ToDos: {
    screen: ToDos,
    navigationOptions: {
      headerTitle: 'To Dos',
      headerBackTitle: ' ',
    },
  },
  Albums: {
    screen: Albums,
    navigationOptions: {
      headerTitle: 'Álbuns',
      headerBackTitle: ' ',
    },
  },
  AlbumPhotos: {
    screen: AlbumPhotos,
    navigationOptions: {
      headerTitle: 'Fotos',
      headerBackTitle: ' ',
    },
  },
  Posts: {
    screen: Posts,
    navigationOptions: {
      headerTitle: 'Posts',
      headerBackTitle: ' ',
    },
  },
  PostDetail: {
    screen: PostDetail,
    navigationOptions: {
      headerTitle: 'Comentários',
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
