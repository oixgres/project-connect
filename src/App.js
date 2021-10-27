import './App.css';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {

  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </Switch>
    </Router>
    // <Login />
  );
}

export default App;
