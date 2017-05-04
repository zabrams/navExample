import React, {Component} from 'react';
import { StyleSheet, Button } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon, Avatar } from 'react-native-elements';

import Feed from '../screens/Feed';
//import Me from '../screens/Me';
//import UserDetail from '../screens/UserDetail';
//import Settings from '../screens/Settings';
import Threads from '../screens/Threads';
import SelectedThread from '../screens/SelectedThread';

/*
class MyFeed extends Component {
  static navigationOptions = {
    tabBarLabel: 'Feed',
    tabBarIcon: ({ tintColor }) => <Icon name="list" size={35} color={tintColor} />
    // Note: By default the icon is only shown on iOS. Search the showIcon option below.
  };

  render() {
    return (
      <Feed />
    );
  }
}

class MyProfile extends Component {
  static navigationOptions = {
    tabBarLabel: 'Me',
    tabBarIcon: ({ tintColor }) => <Icon name="account-circle" size={35} color={tintColor} />
  };

  render() {
    return (
      <Me />
    );
  }
}
*/


export const Root = StackNavigator({
  Feed: {
    screen: Feed,
    navigationOptions: {
      title: 'Your Conversations',
    },
  },
  //Details: {
  //  screen: UserDetail,
  //  navigationOptions: ({navigation}) => ({
  //    title: `${navigation.state.params.name.first.toUpperCase()} ${navigation.state.params.name.last.toUpperCase()}`,
  //  })
  //},
  Threads: {
    screen: Threads,
    navigationOptions: ({navigation}) => ({
      title: `${navigation.state.params.name.first.toUpperCase()} ${navigation.state.params.name.last.toUpperCase()}`,
      headerRight: <Avatar
                    small
                    rounded
                    source={{uri: navigation.state.params.picture.thumbnail}}
                    onPress={() => console.log("Works!")}
                    activeOpacity={0.7}
                    containerStyle={{flex: 1, marginLeft: -80}}
                  />,
    })
  },
  SelectedThread: {
    screen: SelectedThread,
    navigationOptions: ({navigation}) => ({
      title: `${navigation.state.params.title}`,
      headerRight: <Avatar
                    small
                    rounded
                    icon={{name: 'call'}}
                    onPress={() => console.log("Works!")}
                    activeOpacity={0.7}
                    containerStyle={{flex: 1, marginLeft: -80}}
                  />,
    })
  }
});

/*
//Right now not using this section ...
export const Tabs = TabNavigator({
  Feed: {
    screen: FeedStack,
    navigationOptions: {
      tabBarLabel: 'Feed',
      tabBarIcon: ({ tintColor }) => <Icon name="list" size={35} color={tintColor} />
    },
  },
  Me: {
    screen: Me,
    navigationOptions: {
      tabBarLabel: 'Me',
      tabBarIcon: ({ tintColor }) => <Icon name="account-circle" size={35} color={tintColor} />
    },
  },
});

// And because not using the above, there is no way to get here
export const SettingsStack = StackNavigator({
  Settings: {
    screen: Settings,
    navigationOptions: {
      title: 'Settings',
    },
  },
});


export const Root = StackNavigator({
  Tabs: {
    screen: FeedStack,
  },
  //Settings: {
  //  screen: SettingsStack,
  //},
}, {
  mode: 'modal',
  headerMode: 'none'
});

*/
