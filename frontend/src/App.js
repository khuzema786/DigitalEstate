import React, { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Loader from './components/Loader'
const HomeScreen = lazy(() => import('./screens/HomeScreen'))
const Login = lazy(() => import('./screens/Login'))
const Property = lazy(() => import('./screens/Property'))
const Register = lazy(() => import('./screens/Register'))
const PropertyDetails = lazy(() => import('./screens/PropertyDetails'))
const Shortlist = lazy(() => import('./screens/Shortlist'))
const Profile = lazy(() => import('./screens/Profile'))

function App() {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route path="/login" component={Login} exact />
          <Route path="/profile" component={Profile} exact />
          <Route path="/property/:id" component={PropertyDetails} exact />
          <Route path="/register" component={Register} exact />
          <Route path="/property" component={Property} exact />
          <Route
            path="/property/location/:location"
            component={Property}
            exact
          />
          <Route path="/shortlist" component={Shortlist} exact />
          {/* <Route path="/location/:location" component={HomeScreen} exact />
          <Route
            path="/location/:location/page/:pageNumber"
            component={HomeScreen}
            exact
          /> */}
          <Route path="/" component={HomeScreen} exact />
        </Switch>
      </Suspense>
    </Router>
  )
}

export default App
