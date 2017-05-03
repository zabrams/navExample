import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Text
} from 'react-native';
import {List, ListItem} from 'react-native-elements';
import {channels} from '../config/data';
import {NewBadge} from './NewBadge';

class Threads extends Component {
  _onEnterThread = (channel) => {
    this.props.navigation.navigate('SelectedThread', {title: channel.title })
  }

  render () {
    let username = this.props.navigation.state.params.login.username;
    console.log(username);
    let userChannels = channels[username]['channels'];
    console.log(userChannels);

    renderRow = (channel) => {
      if(channel.badge > 0) {
        return (<ListItem
          roundAvatar
          key={channel.key}
          avatar={{ uri: channel.uri }}
          hideChevron={true}
          badge={{ element: <NewBadge badge={channel.badge}/> }}
          title={channel.title}
          subtitle={channel.subtitle}
          onPress={() => this._onEnterThread(channel)}
          />);
      } else {
        return (<ListItem
          roundAvatar
          key={channel.key}
          avatar={{ uri: channel.uri }}
          hideChevron={true}
          title={channel.title}
          subtitle={channel.subtitle}
          onPress={() => this._onEnterThread(channel)}
          />);
      }
    }

    return (
      <List containerStyle={{marginTop: 0}}>
        {userChannels.map((channel) => renderRow(channel))}
        <ListItem
          title={'Add a channel'}
          titleStyle={{color: 'blue', textAlign: 'center'}}
          hideChevron={true}
          />
      </List>
    );
  }
}

export default Threads;
