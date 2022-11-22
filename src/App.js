import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavbarComponent from './Components/navbar';
import { Container } from 'react-bootstrap';
import Cancel from './Pages/cancel';
import Success from './Pages/success';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Store from './Pages/store';
import CartProvider from './cartContext';

function App() {
  return (
    <CartProvider>

      <Container>
        {/* We'll keep the navbar at the top becuase, it's always there on every page, no matter what. */}

        <NavbarComponent></NavbarComponent>
        <BrowserRouter>
          <Routes>
            <Route index element={<Store />} />
            <Route path="success" element={<Success />} />
            <Route path="cancel" element={<Cancel />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </CartProvider>
  );
}

export default App;
