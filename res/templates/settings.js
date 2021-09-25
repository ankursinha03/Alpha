import React, {Component} from 'react';
import {StyleSheet, View, Text, Switch, Image} from 'react-native';
import Svg, {Ellipse} from 'react-native-svg';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';

function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.ellipseStack}>
        <Svg viewBox="0 0 859.43 890.3" style={styles.ellipse}>
          <Ellipse
            strokeWidth={2}
            fill="white"
            stroke="yellow"
            cx={430}
            cy={465}
            rx={429}
            ry={445}></Ellipse>
        </Svg>
        <View style={styles.settingsList}>
          <View style={styles.accountSettings}>
            <Text style={styles.expanded}>Account Settings</Text>
            <View style={styles.subSettings}>
              <View style={styles.editProfileColumn}>
                <View style={styles.editProfile}>
                  <Text style={styles.text10}>Edit Profile</Text>
                  <View style={styles.text10Filler}></View>
                  <IoniconsIcon
                    name="ios-arrow-forward"
                    style={styles.icon}></IoniconsIcon>
                </View>
                <View style={styles.changeConnections}>
                  <Text style={styles.text11}>Change connections</Text>
                  <View style={styles.text11Filler}></View>
                  <IoniconsIcon
                    name="ios-arrow-forward"
                    style={styles.icon2}></IoniconsIcon>
                </View>
              </View>
              <View style={styles.editProfileColumnFiller}></View>
              <View style={styles.providerSettings}>
                <Text style={styles.text12}>Edit provider settings</Text>
                <View style={styles.text12Filler}></View>
                <IoniconsIcon
                  name="ios-arrow-forward"
                  style={styles.icon3}></IoniconsIcon>
              </View>
            </View>
          </View>
          <View style={styles.sub2}>
            <View style={styles.notificationsColumn}>
              <View style={styles.notifications}>
                <Text style={styles.text7}>Notifications</Text>
                <View style={styles.text7Filler}></View>
                <Switch
                  value={true}
                  trackColor={{true: 'rgba(230, 230, 230,1)'}}
                  thumbColor="rgba(31,178,204,1)"
                  style={styles.switch3}></Switch>
              </View>
              <View style={styles.backup}>
                <Text style={styles.text72}>Backup</Text>
                <View style={styles.text72Filler}></View>
                <Switch
                  value={true}
                  trackColor={{
                    true: '#1fb2cc',
                    false: 'rgba(230, 230, 230,1)',
                  }}
                  style={styles.switch2}></Switch>
              </View>
            </View>
            <View style={styles.notificationsColumnFiller}></View>
            <View style={styles.sponsored}>
              <Text style={styles.text73}>Sponsored Messages</Text>
              <View style={styles.text73Filler}></View>
              <Switch
                value={false}
                trackColor={{
                  true: 'rgba(230, 230, 230,1)',
                  false: 'rgba(230, 230, 230,1)',
                }}
                style={styles.switch4}></Switch>
            </View>
          </View>
        </View>
        <Text style={styles.pageName}>ACCOUNT</Text>
        <View style={styles.userInfo}>
          <View style={styles.avatarRow}>
            <Image
              source={{
                uri:
                  'data:image/png;base64,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',
              }}
              resizeMode="stretch"
              style={styles.avatar}></Image>
            <View style={styles.userEmailStack}>
              <Text style={styles.userEmail}>stan@stansmith.com</Text>
              <Text style={styles.userName}>Stan Smith</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
  },
  ellipse: {
    top: 9,
    left: 0,
    width: 859,
    height: 890,
    position: 'absolute',
  },
  settingsList: {
    left: 51,
    height: 409,
    position: 'absolute',
    right: 450,
    bottom: 272,
  },
  accountSettings: {
    height: 165,
    marginTop: 15,
    marginLeft: 24,
    marginRight: 24,
  },
  expanded: {
    color: '#121212',
    fontSize: 18,
    marginTop: -3,
  },
  subSettings: {
    height: 118,
    marginTop: 10,
  },
  editProfile: {
    height: 30,
    flexDirection: 'row',
  },
  text10: {
    color: 'rgba(0,0,0,1)',
    fontSize: 16,
    marginTop: 6,
  },
  text10Filler: {
    flex: 1,
    flexDirection: 'row',
  },
  icon: {
    color: 'rgba(31,178,204,1)',
    fontSize: 30,
  },
  changeConnections: {
    height: 30,
    flexDirection: 'row',
    marginTop: 11,
  },
  text11: {
    color: 'rgba(0,0,0,1)',
    fontSize: 16,
    marginTop: 6,
  },
  text11Filler: {
    flex: 1,
    flexDirection: 'row',
  },
  icon2: {
    color: 'rgba(31,178,204,1)',
    fontSize: 30,
  },
  editProfileColumn: {
    marginLeft: 10,
    marginRight: 10,
  },
  editProfileColumnFiller: {
    flex: 1,
  },
  providerSettings: {
    height: 30,
    flexDirection: 'row',
    marginLeft: 10,
    marginRight: 10,
  },
  text12: {
    color: 'rgba(0,0,0,1)',
    fontSize: 16,
    marginTop: 6,
  },
  text12Filler: {
    flex: 1,
    flexDirection: 'row',
  },
  icon3: {
    color: '#1fb2cc',
    fontSize: 30,
  },
  sub2: {
    height: 186,
    marginTop: 18,
    marginLeft: 29,
    marginRight: 29,
  },
  notifications: {
    height: 27,
    alignSelf: 'center',
    flexDirection: 'row',
  },
  text7: {
    color: '#121212',
    fontSize: 18,
  },
  text7Filler: {
    flex: 1,
    flexDirection: 'row',
  },
  switch3: {
    width: 46,
  },
  backup: {
    height: 27,
    alignSelf: 'center',
    flexDirection: 'row',
    marginTop: 53,
  },
  text72: {
    color: '#121212',
    fontSize: 18,
  },
  text72Filler: {
    flex: 1,
    flexDirection: 'row',
  },
  switch2: {
    width: 46,
    marginRight: -2,
  },
  notificationsColumn: {},
  notificationsColumnFiller: {
    flex: 1,
  },
  sponsored: {
    height: 27,
    alignSelf: 'center',
    flexDirection: 'row',
  },
  text73: {
    color: '#121212',
    fontSize: 18,
  },
  text73Filler: {
    flex: 1,
    flexDirection: 'row',
  },
  switch4: {
    width: 46,
  },
  pageName: {
    top: 0,
    left: 85,
    color: 'rgba(255,255,255,1)',
    position: 'absolute',
    fontSize: 24,
  },
  userInfo: {
    top: 64,
    left: 87,
    height: 125,
    position: 'absolute',
    right: 451,
    flexDirection: 'row',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 100,
  },
  userEmail: {
    top: 50,
    left: 0,

    color: 'rgba(0,0,0,1)',
    position: 'absolute',
    fontSize: 16,
  },
  userName: {
    top: 0,
    left: 0,
    color: '#1fb2cc',
    position: 'absolute',
    fontSize: 30,
  },
  userEmailStack: {
    height: 96,
    marginLeft: 62,
    marginTop: 13,
  },
  avatarRow: {
    height: 109,
    flexDirection: 'row',
    flex: 1,
    marginRight: 11,
  },
  ellipseStack: {
    height: 899,
    marginTop: 30,
    marginLeft: -50,
    marginRight: -449,
  },
});

export default Index;
