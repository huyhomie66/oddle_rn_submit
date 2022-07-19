// import {Navigation} from 'react-native-navigation';
import React from 'react';
import {
  createBottomTabNavigator,
  BottomTabBarProps,
} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import TabBottomComponent from 'components/TabBottom';

const MainStack = createNativeStackNavigator();

export interface IStack {
  name?: string;
  component: React.ComponentType<any>;
}

export interface ITab {
  name: string;
  component: React.ComponentType<any>;
}

const TabBottom = ({tabs}: {tabs: ITab[]}) => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      initialRouteName="Shop"
      screenOptions={{headerShown: false}}
      tabBar={props => <TabBottomComponent {...props} />}>
      {tabs.map((e, i) => (
        <Tab.Screen key={i} name={e.name} component={e.component} />
      ))}
    </Tab.Navigator>
  );
};

const MainNavigation = ({stacks}: {stacks: IStack[]}) => {
  const getOrientation = (stack: IStack) =>
    stack.name === 'TradingViewChart' ? 'landscape' : 'portrait';

  return (
    <MainStack.Navigator screenOptions={{headerShown: false}}>
      {stacks.map((stack, index) => (
        <MainStack.Screen
          key={index}
          name={stack.name}
          component={stack.component}
          options={{
            orientation: getOrientation(stack),
          }}
        />
      ))}
    </MainStack.Navigator>
  );
};

export {MainNavigation, TabBottom};
