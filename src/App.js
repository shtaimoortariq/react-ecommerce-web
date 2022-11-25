import Home from './routes/home/home.component';
import SignIn from './routes/sign-in/sign-in.component';
import Navigation from './routes/navigation/navigation.component';
import { Routes, Route } from 'react-router-dom';



const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='sign-in' element={<SignIn />} />
      </Route>
    </Routes>
  )
}

const Shop = () => {
  return (
    <h2>Its a Shop</h2>
  )
}

export default App;
