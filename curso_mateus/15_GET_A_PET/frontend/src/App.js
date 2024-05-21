import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

/* componentes */
import NavBar from './components/layout/NavBar'
import Footer from './components/layout/Footer'
import Container from './components/layout/Container'

/* pages */
import Login from './components/pages/Auth/Login'
import Register from './components/pages/Auth/Register'
import Home from './components/pages/Home'

function App() {
  return (
    <Router>
      <NavBar />
      <Container>

        <Switch>
          <Route path='/login'>
            <Login />
          </Route>

          <Route path='/register'>
            <Register />
          </Route>

          <Route path='/'>
            <Home />
          </Route>
        </Switch>

      </Container>
      <Footer />
    </Router>
  );
}

export default App;
