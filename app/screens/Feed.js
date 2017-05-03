import React, {Component} from 'react';
import {
  Text,
  View,
  ScrollView
} from 'react-native';
import {List, ListItem} from 'react-native-elements';
import {users} from '../config/data';

class Feed extends Component {
  onLearnMore = (user) => {
    this.props.navigation.navigate('Threads',{...user});
  };

  render() {
    return (
      <View style={{flex: 1}} >
        <ScrollView>
          <List containerStyle={{marginTop: 0}}>
            {users.map((user) => (
              <ListItem
                key={user.login.username}
                roundAvatar
                avatar={{ uri: user.picture.thumbnail }}
                title={`${user.name.first.toUpperCase()} ${user.name.last.toUpperCase()}`}
                subtitle={user.channels}
                onPress={() => this.onLearnMore(user)}
                />
            ))}
          </List>
        </ScrollView>
      </View>
    );
  }
}

export default Feed;
