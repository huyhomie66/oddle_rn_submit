import {TabBottom} from 'app/NavigationComponent';
import React from 'react';
import {Home, Shop, Favorites} from 'screens/index';

const tabs = [
  {name: 'Home', component: Home},
  {name: 'Shop', component: Shop},
  {name: 'Favorites', component: Favorites},
];

const MainBottomTab = () => <TabBottom tabs={tabs} />;

const stacks = [
  {
    name: 'Main',
    component: MainBottomTab,
  },
];

export {stacks, tabs};
