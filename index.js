// import { AppRegistry } from 'react-native';
// import App from './App';

// AppRegistry.registerComponent('learning', () => App);


import { AppRegistry, Dimensions } from 'react-native';
import { DrawerNavigator } from 'react-navigation';
// import App from './App';
//Components
import HomeComponent from './components/HomeComponent';
import InfoComponent from './components/InfoComponent';
import SettingsComponent from './components/SettingsComponent';

//Screen names
import { Home, Info, Settings} from './screenNames';
//Screen size
var {height, width} = Dimensions.get('window');

let routeConfigs = {
    Home: {
        path: '/',
        screen: HomeComponent,
    },
    Info: {
        path: '/info',
        screen: InfoComponent,
    },
    Settings: {
        path: '/settings',
        screen: SettingsComponent,
    },
 
 
};
let drawerNavigatorConfig = {    
    initialRouteName: Home,
    drawerWidth: width / 2.5,
    drawerPosition: 'left',
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',  
    // drawerBackgroundColor: 'orange',
    contentOptions: {
        activeTintColor: 'red',
    },
    order: [Home, Info, Settings]
};
const App = DrawerNavigator(routeConfigs, drawerNavigatorConfig);
AppRegistry.registerComponent('learning', () => App);