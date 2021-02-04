import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings201164Navigator from '../features/Settings201164/navigator';
import Messaging201159Navigator from '../features/Messaging201159/navigator';
import Tutorial201158Navigator from '../features/Tutorial201158/navigator';
import Maps201157Navigator from '../features/Maps201157/navigator';
import CalendarView201156Navigator from '../features/CalendarView201156/navigator';
import Camera201155Navigator from '../features/Camera201155/navigator';
import EmailAuth201154Navigator from '../features/EmailAuth201154/navigator';
import UserProfile201132Navigator from '../features/UserProfile201132/navigator';
import Settings201130Navigator from '../features/Settings201130/navigator';
import Settings201122Navigator from '../features/Settings201122/navigator';
import NotificationList201121Navigator from '../features/NotificationList201121/navigator';
import Tutorial201093Navigator from '../features/Tutorial201093/navigator';
import UserProfile201092Navigator from '../features/UserProfile201092/navigator';
import UserProfile201061Navigator from '../features/UserProfile201061/navigator';
import Settings201059Navigator from '../features/Settings201059/navigator';
import Settings201051Navigator from '../features/Settings201051/navigator';
import NotificationList201050Navigator from '../features/NotificationList201050/navigator';
import Tutorial201022Navigator from '../features/Tutorial201022/navigator';
import UserProfile201021Navigator from '../features/UserProfile201021/navigator';
import Maps200994Navigator from '../features/Maps200994/navigator';
import Add-Item200993Navigator from '../features/Add-Item200993/navigator';
import Maps200989Navigator from '../features/Maps200989/navigator';
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
Settings201164: { screen: Settings201164Navigator },
Messaging201159: { screen: Messaging201159Navigator },
Tutorial201158: { screen: Tutorial201158Navigator },
Maps201157: { screen: Maps201157Navigator },
CalendarView201156: { screen: CalendarView201156Navigator },
Camera201155: { screen: Camera201155Navigator },
EmailAuth201154: { screen: EmailAuth201154Navigator },
UserProfile201132: { screen: UserProfile201132Navigator },
Settings201130: { screen: Settings201130Navigator },
Settings201122: { screen: Settings201122Navigator },
NotificationList201121: { screen: NotificationList201121Navigator },
Tutorial201093: { screen: Tutorial201093Navigator },
UserProfile201092: { screen: UserProfile201092Navigator },
UserProfile201061: { screen: UserProfile201061Navigator },
Settings201059: { screen: Settings201059Navigator },
Settings201051: { screen: Settings201051Navigator },
NotificationList201050: { screen: NotificationList201050Navigator },
Tutorial201022: { screen: Tutorial201022Navigator },
UserProfile201021: { screen: UserProfile201021Navigator },
Maps200994: { screen: Maps200994Navigator },
Add-Item200993: { screen: Add-Item200993Navigator },
Maps200989: { screen: Maps200989Navigator },
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
