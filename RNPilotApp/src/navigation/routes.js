import { SwitchNavigator, StackNavigator } from 'react-navigation';

import Login from '../screens/Login';
import Register from '../screens/Register';
import Employees from '../screens/Employees';
import ToDos from '../screens/ToDos';

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
      headerStyle: {
        borderBottomWidth: 0,
      },
    },
  },
  ToDos: {
    screen: ToDos,
    navigationOptions: {
      headerTitle: 'To Dos',
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
