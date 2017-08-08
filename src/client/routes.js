/* @flow */
import App from './components/App';
import NotFound from './components/NotFound';
import Tower from './pages/Tower';

const routes = {
  path: '',
  component: App,
  childRoutes: [
    {
      path: '/websites',
      component: Tower,
    },
    {
      path: '*',
      component: NotFound,
    },
  ],
};

export default routes;
