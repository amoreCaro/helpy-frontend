import './App.css';
import { Routes, Route } from 'react-router-dom';

import Home from "./pages/Home";
import SigninForm from './pages/_auth/forms/SigninForm';
import SignupForm from './pages/_auth/forms/SignupForm';

function App() {
  return (
    <>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/home" element={<Home />} />
            <Route path="/sign-in" element={<SigninForm />} />
            <Route path="/sign-up" element={<SignupForm />} />
          </Route>
        </Routes>
    </>
  )
}

export default App
