import React, {Component} from 'react';
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  TouchableHighlight,
  ListView,
  ScrollView
} from 'react-native';
import {Avatar, Icon} from 'react-native-elements';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import InvertibleScrollView from 'react-native-invertible-scroll-view';

class SelectedThread extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([
        {name: 'Zach', message: 'this is a test message', owner: true},
        {name: 'Zach', message: 'heres a much longer message and we will see iof this one wraps because it really should we dont want it running off the side of the screen', owner: true},
        {name: 'Taylor', message: 'Hello?', owner: false},
        {name: 'Taylor', message: 'this is a test message', owner: false},
        {name: 'Zach', message: 'this is a test message', owner: true},
        {name: 'Taylor', message: 'this is a test message', owner: false},
        {name: 'Taylor', message: 'this is a test message', owner: false},
        {name: 'Taylor', message: 'this is a test message', owner: false},
        {name: 'Taylor', message: 'this is a test message', owner: false},
        {name: 'Taylor', message: 'this is a test message', owner: false},
        {name: 'Taylor', message: 'this is a test message', owner: false},
        {name: 'Taylor', message: 'this is a test message', owner: false},
        {name: 'Taylor', message: 'this is a test message', owner: false},
        {name: 'Taylor', message: 'this is a test message', owner: false},
        {name: 'Taylor', message: 'this is a test message', owner: false},
        {name: 'Taylor', message: 'this is a test message', owner: false},
        {name: 'Taylor', message: 'this is a test message', owner: false},
        {name: 'Taylor', message: 'this is a test message', owner: false},
      ])
    };
  }

  _userMessage = (message) => {
      var userStyle = styles.recipientMessage;
      if(message.name === "Zach") {
        userStyle = styles.userMessage
      }
      return (
          <View style={userStyle}>
            <Text style={[styles.name, styles.text]}>{message.name}</Text>
            <Text style={styles.text}>{message.message}</Text>
          </View>
        );
  }


  render () {
    var height = null;
    return (
      <View style={{flex:1}}>
      <View style={styles.container}>
        <View style={styles.chatList}>
          <ListView
            renderScrollComponent={props => <InvertibleScrollView {...props} inverted />}
            dataSource={this.state.dataSource}
            renderRow={(message) => this._userMessage(message)}
            />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Send a message ..."
            autoFocus={true}
            />
          <View style={styles.sendContainer}>
            <Avatar
              rounded
              width={30}
              height={30}
              icon={{name: 'send'}}
              onPress={() => console.log("Works!")}
              activeOpacity={0.7}
              overlayContainerStyle={{backgroundColor: 'dodgerblue'}}
              />
          </View>
        </View>
      </View>
      <KeyboardSpacer/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column'
  },
  chatList: {
    flex: 1,
    backgroundColor: 'white',
    paddingLeft: 5,
    paddingRight: 5
  },
  userMessage: {
    borderLeftWidth: 3,
    borderLeftColor: 'cornflowerblue',
    margin: 5,
  },
  recipientMessage: {
    borderLeftWidth: 3,
    borderLeftColor: 'coral',
    margin: 5,
  },
  name: {
    fontWeight: '600',
  },
  text: {
    paddingLeft: 5,
    paddingTop: 2,
    paddingBottom: 2,
    fontSize: 16,
  },
  inputContainer: {
    height: 55,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: 'gainsboro',
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: 'center',
    padding: 5,
  },
  textInput: {
    flex: 1,
  },
  sendContainer: {
    height: 40,
    width: 40,
    padding: 5,
  },
});

export default SelectedThread;
