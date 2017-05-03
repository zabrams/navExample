import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import { List, ListItem } from 'react-native-elements';

class Settings extends Component {
  render() {
    return (
      <View style={{flex: 1}} >
      <ScrollView>
        <List>
          <ListItem
            title="Notifications"
          />
          <ListItem
            title="Profile"
          />
          <ListItem
            title="Password"
          />
        </List>
        <List>
          <ListItem
            title="Sign Out"
            rightIcon={{ name: 'cancel' }}
          />
        </List>
      </ScrollView>
      </View>
    );
  }
}

export default Settings;
