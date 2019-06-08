import List from './src/list/List.js';
import Info from './src/info/Info.js';

import { createAppContainer, createStackNavigator } from 'react-navigation';


const Routes = createAppContainer(
  createStackNavigator({
    Home: Info,
    About: List
  })
);

export default Routes;
