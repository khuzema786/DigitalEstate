import React, { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import Loader from './components/Loader'
const HomeScreen = lazy(() => import('./screens/HomeScreen'))
const Login = lazy(() => import('./screens/Login'))
const Property = lazy(() => import('./screens/Property'))
const Register = lazy(() => import('./screens/Register'))
const PropertyDetails = lazy(() => import('./screens/PropertyDetails'))
const Shortlist = lazy(() => import('./screens/Shortlist'))
const AddProperty = lazy(() => import('./screens/AddProperty'))
const Profile = lazy(() => import('./screens/Profile'))

function App() {
  return (
    <Router>
      <Header />
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route path="/register" component={Register} exact />
          <Route path="/login" component={Login} exact />
          <Route path="/profile" component={Profile} exact />
          <Route path="/property/:id" component={PropertyDetails} exact />
          <Route path="/property" component={Property} exact />
          <Route path="/provider/property" component={AddProperty} exact />
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
      <Footer />
    </Router>
  )
}

export default App
