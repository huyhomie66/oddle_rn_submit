import {TabBottom} from 'app/NavigationComponent';
import React from 'react';
import {Home, Shop, Favorite} from 'screens/index';

const tabs = [
  {name: 'Home', component: Home},
  {name: 'Shop', component: Shop},
  {name: 'Favorite', component: Favorite},
];

const MainBottomTab = () => <TabBottom tabs={tabs} />;

const stacks = [
  {
    name: 'Main',
    component: MainBottomTab,
  },
];

export {stacks, tabs};
