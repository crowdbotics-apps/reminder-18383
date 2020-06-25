import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile71594Navigator from '../features/UserProfile71594/navigator';
import Tutorial71593Navigator from '../features/Tutorial71593/navigator';
import NotificationList71565Navigator from '../features/NotificationList71565/navigator';
import Settings71564Navigator from '../features/Settings71564/navigator';
import Settings71556Navigator from '../features/Settings71556/navigator';
import UserProfile71554Navigator from '../features/UserProfile71554/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import TutorialNavigator from '../features/Tutorial/navigator';
import MapsNavigator from '../features/Maps/navigator';
import CalendarNavigator from '../features/Calendar/navigator';
import CameraNavigator from '../features/Camera/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
UserProfile71594: { screen: UserProfile71594Navigator },
Tutorial71593: { screen: Tutorial71593Navigator },
NotificationList71565: { screen: NotificationList71565Navigator },
Settings71564: { screen: Settings71564Navigator },
Settings71556: { screen: Settings71556Navigator },
UserProfile71554: { screen: UserProfile71554Navigator },
Messenger: { screen: MessengerNavigator },
Tutorial: { screen: TutorialNavigator },
Maps: { screen: MapsNavigator },
Calendar: { screen: CalendarNavigator },
Camera: { screen: CameraNavigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
