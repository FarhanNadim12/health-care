
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import Home from './components/Home/Home';
import Doctors from './components/Doctors/Doctors';
import Menubar from './components/Menubar/Menubar';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Notfound from './components/Notfound/Notfound';


function App() {
  return (
    <AuthProvider>
      <Router>

        <Switch>

          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/doctors'>
            <Doctors></Doctors>
          </Route>
          <Route path='/about'>
            <About></About>
          </Route>
          <Route path='/register'>
            <Register></Register>
          </Route>
          <Route path='/login'>
            <Login></Login>
          </Route>
          <PrivateRoute path='/detail/:serviceId'>
            <Detail></Detail>
          </PrivateRoute>
          <Route path='*'>
            <Notfound></Notfound>
          </Route>
        </Switch >
      </Router >
    </AuthProvider>

  );
}

export default App;
