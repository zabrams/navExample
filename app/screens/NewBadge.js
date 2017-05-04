import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import {Badge} from 'react-native-elements';

class NewBadge extends Component {
  render() {
    if(this.props.badge > 0) {
      return (
        <View style={styles.container}>
          <Badge containerStyle={{ backgroundColor: 'dodgerblue'}}>
            <Text style={styles.number}>{this.props.badge}</Text>
          </Badge>
        </View>
      );
    } else {
      return (null)
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  number: {
    color: 'white',
    fontWeight: '600',
    fontSize: 16
  }
});

module.exports = {NewBadge};
