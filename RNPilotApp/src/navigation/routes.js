import { SwitchNavigator } from 'react-navigation';

import Login from '../screens/Login';

export default SwitchNavigator(
  {
    Login,
  },
  {
    initialRouteName: 'Login',
  },
);
