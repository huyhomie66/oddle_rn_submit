// import {Navigation} from 'react-native-navigation';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {stacks} from 'app/screens';
import configurations from 'theme';
import Provider from 'app/Provider';
import {MainNavigation} from 'app/NavigationComponent';
import {LogBox} from 'react-native';

const RootStack = createNativeStackNavigator();

const AppNavigator = () => {
  LogBox.ignoreAllLogs(true);
  const Root = () => <MainNavigation stacks={stacks} />;
  configurations();
  return (
    <Provider>
      <NavigationContainer>
        <RootStack.Navigator
          initialRouteName="MainStack"
          screenOptions={{headerShown: false}}>
          <RootStack.Screen name="MainStack" component={Root} />
        </RootStack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default AppNavigator;
