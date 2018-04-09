import { SwitchNavigator, StackNavigator } from 'react-navigation';

import Login from '../screens/Login';
import Register from '../screens/Register';

const LoginStack = StackNavigator({
  Register: {
    screen: Register,
    navigationOptions: {
      headerTitle: 'Cadastro',
      headerBackTitle: ' ',
    },
  },
  Login: {
    screen: Login,
    navigationOptions: {
      headerTitle: 'Login',
      headerBackTitle: ' ',
    },
  },
});

export default SwitchNavigator(
  {
    Login: LoginStack,
  },
  {
    initialRouteName: 'Login',
  },
);
