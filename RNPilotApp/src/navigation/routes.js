import { SwitchNavigator, StackNavigator } from 'react-navigation';

import Login from '../screens/Login';
import Register from '../screens/Register';
import Employees from '../screens/Employees';
import ToDos from '../screens/ToDos';
import Albums from '../screens/Albums';
import Posts from '../screens/Posts';

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
      headerTitle: 'Albums',
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
