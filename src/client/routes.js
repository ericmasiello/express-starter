/* @flow */
import App from './App';
import Home from './Home';
import Detail from './Detail';

const routes = {
  path: '',
  component: App,
  childRoutes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/detail/:id',
      component: Detail,
    },
  ],
};

export default routes;
