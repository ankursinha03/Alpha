import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import LottieView from 'lottie-react-native';
import PullToRefresh from 'react-native-pull-refresh';

export default class weatherAnimation extends Component {
  constructor() {
    super();
    this.state = {
      isRefreshing: false,
    };
  }

  onRefresh() {
    this.setState({isRefreshing: true});

    // Simulate fetching data from the server
    setTimeout(() => {
      this.setState({isRefreshing: false});
    }, 5000);
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <Header />
        <View style={{flex: 7, backgroundColor: '#F8F4FC'}}>
          <PullToRefresh
            isRefreshing={this.state.isRefreshing}
            onRefresh={this.onRefresh.bind(this)}
            animationBackgroundColor={'#564A63'}
            pullHeight={180}
            contentView={
              <ScrollView>
                <Text>akjfbkjf</Text>
                <Text>akjfbkjf</Text>
                <Text>akjfbkjf</Text>
                <Text>akjfbkjf</Text>
                <Text>akjfbkjf</Text>

                <Text>akjfbkjf</Text>
                <Text>akjfbkjf</Text>
                <Text>akjfbkjf</Text>
                <Text>akjfbkjf</Text>
                <Text>akjfbkjf</Text>
                <Text>akjfbkjf</Text>
                <Text>akjfbkjf</Text>

                <Text>akjfbkjf</Text>
                <Text>akjfbkjf</Text>
              </ScrollView>
            }
            onPullAnimationSrc={require('../covid19.json')}
            onStartRefreshAnimationSrc={require('../covid19.json')}
            onRefreshAnimationSrc={require('../covid19.json')}
            onEndRefreshAnimationSrc={require('../covid19.json')}
          />
        </View>
      </View>
    );
  }
}
