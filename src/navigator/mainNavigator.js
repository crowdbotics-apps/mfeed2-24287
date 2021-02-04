import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile200985Navigator from '../features/UserProfile200985/navigator';
import EmailAuth200962Navigator from '../features/EmailAuth200962/navigator';
import Camera200961Navigator from '../features/Camera200961/navigator';
import CalendarView200960Navigator from '../features/CalendarView200960/navigator';
import Maps200959Navigator from '../features/Maps200959/navigator';
import Tutorial200958Navigator from '../features/Tutorial200958/navigator';
import Messaging200957Navigator from '../features/Messaging200957/navigator';
import ArticleList200956Navigator from '../features/ArticleList200956/navigator';
import Achievements200955Navigator from '../features/Achievements200955/navigator';
import Add-Item200952Navigator from '../features/Add-Item200952/navigator';
import BlankScreen200946Navigator from '../features/BlankScreen200946/navigator';
import Contacts200929Navigator from '../features/Contacts200929/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile200985: { screen: UserProfile200985Navigator },
EmailAuth200962: { screen: EmailAuth200962Navigator },
Camera200961: { screen: Camera200961Navigator },
CalendarView200960: { screen: CalendarView200960Navigator },
Maps200959: { screen: Maps200959Navigator },
Tutorial200958: { screen: Tutorial200958Navigator },
Messaging200957: { screen: Messaging200957Navigator },
ArticleList200956: { screen: ArticleList200956Navigator },
Achievements200955: { screen: Achievements200955Navigator },
Add-Item200952: { screen: Add-Item200952Navigator },
BlankScreen200946: { screen: BlankScreen200946Navigator },
Contacts200929: { screen: Contacts200929Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
