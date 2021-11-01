import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PrivateLayout from '../layout/PrivateLayout';
import PublicLayout from '../layout/PublicLayout';
import Dashboard from '../pages/admin/Dashboard';
import Roles from '../pages/admin/Roles';
import Sells from '../pages/admin/Sells';
import Public from '../pages/public/Public';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path={['/dash', '/roles', '/sells']}>
          <PrivateLayout>
            <Switch>
              <Route path='/dash'>
                <Dashboard />
              </Route>
              <Route path='/roles'>
                <Roles />
              </Route>
              <Route path='/sells'>
                <Sells />
              </Route>
            </Switch>
          </PrivateLayout>
        </Route>
        <Route path='/'>
          <PublicLayout>
            <Public />
          </PublicLayout>
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
