import React, { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import Loader from './components/Loader'
import Bott from './components/Bott'
const HomeScreen = lazy(() => import('./screens/HomeScreen'))
const Login = lazy(() => import('./screens/Login'))
const Property = lazy(() => import('./screens/Property'))
const Register = lazy(() => import('./screens/Register'))
const PropertyDetails = lazy(() => import('./screens/PropertyDetails'))
const Shortlist = lazy(() => import('./screens/Shortlist'))
const AddProperty = lazy(() => import('./screens/AddProperty'))
const PropertyList = lazy(() => import('./screens/PropertyList'))
const EditProperty = lazy(() => import('./screens/EditProperty'))
const Notification = lazy(() => import('./screens/Notification'))
const Profile = lazy(() => import('./screens/Profile'))

function App() {
  return (
    <Router>
      <Header />
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route path="/" component={HomeScreen} exact />
          <Route path="/register" component={Register} exact />
          <Route path="/login" component={Login} exact />
          <Route path="/profile" component={Profile} exact />
          <Route path="/shortlist" component={Shortlist} exact />
          <Route path="/property" component={Property} exact />
          <Route path="/property/:id" component={PropertyDetails} exact />

          {/* Provider Routes */}
          <Route path="/provider/property" component={AddProperty} exact />
          <Route path="/provider/notification" component={Notification} exact />
          <Route
            path="/provider/property/list"
            component={PropertyList}
            exact
          />
          <Route
            path="/provider/property/:id/edit"
            component={EditProperty}
            exact
          />

          {/* Filtering & Sorting Routes */}
          <Route path="/search/:keyword" component={Property} exact />
          <Route path="/location/:location" component={Property} exact />
          <Route path="/option/:option" component={Property} exact />
          <Route path="/option/:option/:type" component={Property} exact />
        </Switch>
      </Suspense>
      <Footer />
      <Bott />
    </Router>
  )
}

export default App
