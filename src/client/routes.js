/* @flow */
import App from './components/App';
import Home from './components/Home';
import Detail from './components/Detail';
import NotFound from './components/NotFound';
import Tower from './pages/Tower';

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
    {
      path: '/tower',
      component: Tower,
    },
    {
      path: '*',
      component: NotFound,
    },
  ],
};

export default routes;
