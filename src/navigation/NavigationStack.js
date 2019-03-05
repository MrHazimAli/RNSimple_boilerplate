import { createStackNavigator, createAppContainer } from 'react-navigation';

import Launch from '../screens/Launch';

const RNApp = createStackNavigator(
    {
        Launch: {
            screen: Launch,
            navigationOptions: { header: null, gesturesEnabled: false }
        }
    },
    {
        initialRouteName: 'Launch'
    }
);

export default createAppContainer(RNApp);
