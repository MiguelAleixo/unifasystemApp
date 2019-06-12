import Login from './login/Login';
import List from './list/List.js';
import Info from './info/Info.js';

import { createAppContainer, createStackNavigator } from 'react-navigation';


const Routes = createAppContainer(
  createStackNavigator({
    Login: Login,
    List: List,
    Info: Info,
  },
    {
      headerMode: 'none'
    })
);

export default Routes;
