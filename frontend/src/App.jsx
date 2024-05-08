import { BrowserRouter , Routes ,Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Register from './pages/Register';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import Error from './pages/Error';
import Footer from './components/Footer';
import Logout from './pages/Logout';
import AdminLayout from './components/AdminLayout';
import AdminUsers from './pages/AdminUsers';
import AdminContacts from './pages/AdminContacts';
import AdminServices from './pages/AdminServices';

function App() {

  return (
    <>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/services" element={<Services />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/logout" element={<Logout />} />
      <Route path='*' element={<Error />} />
      <Route path='/admin' element={<AdminLayout />}>
        <Route path='users' element={<AdminUsers />} />
        <Route path='contacts' element={<AdminContacts />} />
        <Route path='services' element={<AdminServices />} />
      </Route>
    </Routes>
    <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
