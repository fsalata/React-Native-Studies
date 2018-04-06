import { SwitchNavigator, StackNavigator } from 'react-navigation';

import Login from '../screens/Login';

const LoginStack = StackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      headerTitle: 'Faça o Login',
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
