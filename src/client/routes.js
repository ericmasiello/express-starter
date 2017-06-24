/* @flow */
import App from './components/App';
import Home from './components/Home';
import Detail from './components/Detail';

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
