/* @flow */
import App from './components/App';
import NotFound from './components/NotFound';
import Tower from './pages/Tower';
import Dify from './pages/Dify';

const routes = {
  path: '',
  component: App,
  childRoutes: [
    {
      path: '/websites',
      component: Tower,
    },
    {
      path: '/design-services',
      component: Dify,
    },
    {
      path: '*',
      component: NotFound,
    },
  ],
};

export default routes;
