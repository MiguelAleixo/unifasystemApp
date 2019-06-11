import Login from './login/Login';
import List from './list/List.js';
import Info from './info/Info.js';

import { createAppContainer, createStackNavigator } from 'react-navigation';


const Routes = createAppContainer(
  createStackNavigator({
    Info: Info,
    Login: Login,
    List: List
  },
    {
      headerMode: 'none'
    })
);

export default Routes;
