import GoogleAuth from './components/GoogleAuth';
import { Switch, Route } from 'react-router-dom';
function App() {
  return (
    <div className='App'>
      <Switch>
        <Route path='/store'>{/* store component */}</Route>
        <Route path='/'>
          <GoogleAuth />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
