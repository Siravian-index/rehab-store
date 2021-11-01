import GoogleAuth from './components/GoogleAuth';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
function App() {
  return (
    <div className='App'>
      <GoogleAuth />
    </div>
  );
}

export default App;
