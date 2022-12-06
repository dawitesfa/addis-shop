import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Footer, Header } from './features/ui'
import {
  AboutUs,
  Explore,
  ForgotPassword,
  Item,
  ItemList,
  Signin,
  Services,
  Signup,
  CreateListing,
  Profile,
} from './pages'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Explore />} />
        <Route path='/sign-up' element={<Signup />} />
        <Route path='/sign-in' element={<Signin />} />
        <Route path='/add-listing' element={<CreateListing />} />
        {/* <Route path='/profile' element={<PrivateRoute />}> */}
        <Route path='/profile' element={<Profile />} />
        {/* </Route> */}
        <Route path='/services' element={<Services />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
        <Route path='/category/:catName' element={<ItemList />} />
        <Route path='/category/:catName/:id' element={<Item />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
