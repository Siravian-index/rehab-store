import GoogleAuth from './components/GoogleAuth';
import { Switch, Route, Link } from 'react-router-dom';
function App() {
  return (
    <div className='App'>
      <Switch>
        <Route path='/store'></Route>
        <Route path='/'>
          <GoogleAuth />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
